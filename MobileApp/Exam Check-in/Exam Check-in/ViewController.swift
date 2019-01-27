//
//  ViewController.swift
//  Exam Check-in
//
//  Created by Ali Ansari on 2019-01-26.
//  Copyright © 2019 Ali Ansari. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON

class ViewController: UIViewController, UINavigationControllerDelegate, UIImagePickerControllerDelegate {
  
  var imagePicker: UIImagePickerController!

  @IBOutlet weak var imageView: UIImageView!
  
  @IBAction func takePhoto(_ sender: Any) {
    imagePicker =  UIImagePickerController()
    imagePicker.delegate = self
    imagePicker.sourceType = .camera
    present(imagePicker, animated: true, completion: nil)
  }
  
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    imagePicker.dismiss(animated: true, completion: nil)
    imageView.image = info[.originalImage] as? UIImage
    
    let URL = "https://westus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed"
    //let KEY01 = "9a9a126632d64209ba6ccd7d6e27059b"
    
    let headers = [
      "Ocp-Apim-Subscription-Key": "9a9a126632d64209ba6ccd7d6e27059b",
      "Content-Type": "application/json"
    ]
    
    
    
    let params : [String : String] = ["url" : "https://www.gstatic.com/webp/gallery3/1.png?fbclid=IwAR1MDhHvVcFrWoBk8CHiSSJFi9xElywcM63zMcPq9NmGUPx3alBYVXdQ1fQ"]
    
    Alamofire.request(URL, method: .post, parameters: params, encoding: JSONEncoding.default, headers: headers)
      .responseJSON { response in
        print(response)
    }
    
    
  }
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
  }

}

