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
  var operationLocationString = ""
  
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
    
    let imageData = imageView.image!.pngData()!
    let imageStr = imageData.base64EncodedString()
    
    //let json = "{ 'url' : 'http://media-s3-us-east-1.ceros.com/ozy/images/2017/12/15/cd09ad332e974fd19dba422a130a313b/convo-1-text-13.png' }"
    
    let url = URL(string: "https://westus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed")!
    
    var request = URLRequest(url: url)
    
    request.httpMethod = "Post"
    request.setValue("application/octet-stream", forHTTPHeaderField: "Content-Type")
    request.setValue("9a9a126632d64209ba6ccd7d6e27059b", forHTTPHeaderField: "Ocp-Apim-Subscription-Key")
    
//    request.httpBody = json.data(using: .utf8)
    request.httpBody = imageData
    
    let task = URLSession.shared.dataTask(with: request) { data, response, error in
      if let httpStatus = response as? HTTPURLResponse, httpStatus.statusCode != 200 {           // check for http errors
        print("statusCode should be 200, but is \(httpStatus.statusCode)")
        //        print("response = \(response!)")
        
        let operationLocation = (httpStatus.allHeaderFields["Operation-Location"])! as? String
        //print(operationLocation!) // this bitch is an optional String!!
        self.operationLocationString = operationLocation!
        print(self.operationLocationString)
        
        let URL = operationLocation!
        sleep(3)
        let header : [String : String] = ["Ocp-Apim-Subscription-Key" : "9a9a126632d64209ba6ccd7d6e27059b"]
        Alamofire.request(URL, method: .get, headers: header).responseJSON { (response) in
          if ((response.result.value) != nil) {
            let jsonData = JSON(response.result.value!)
            print(jsonData["recognitionResult"]["lines"])
          }
          
        }
        
        //let otherUrl = URL(string: "https://westus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed")!
        
        //var request = URLRequest(url: url)
        
        
        
        
      }
    }
    task.resume()
    
  }
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
  }
  
}



