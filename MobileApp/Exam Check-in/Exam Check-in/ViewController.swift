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
    
    let json = "{ 'url' : 'https://www.gstatic.com/webp/gallery3/1.png?fbclid=IwAR3HC7encjAoNO1sGqmfen6rqqiEhtGlXvAwjuxUfGpKTX9D7c6LF9hn9zE' }"
    
    let url = URL(string: "https://westus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed")!
    
    var request = URLRequest(url: url)
    
    request.httpMethod = "Post"
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    request.setValue("9a9a126632d64209ba6ccd7d6e27059b", forHTTPHeaderField: "Ocp-Apim-Subscription-Key")
    
    request.httpBody = json.data(using: .utf8)
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in
      if let httpStatus = response as? HTTPURLResponse, httpStatus.statusCode != 200 {           // check for http errors
        print("statusCode should be 200, but is \(httpStatus.statusCode)")
//        print("response = \(response!)")
      
        let operationLocation = (httpStatus.allHeaderFields["Operation-Location"])! as? String
        print(operationLocation!) // this bitch is an optional String!!

        
        
      }
    }
    task.resume()
  }
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
  }
  
}


