function selecting(idval){
      console.log(idval)
      document.getElementById("imageprocessing").style.display = "inline"
      const new_image_element = document.getElementById('img_processing')
      new_image_element.innerHTML = "<img id='processimage' src='./resources/images/"+idval+".JPG' class='card-img-top'  width='2rem' height='500px'>"
      document.getElementById("imageprocessing").scrollIntoView()
      const imageElement = document.getElementById(idval);
    imageElement.onload = () => {
        analyzeImage(imageElement);
    };

    }

    function isReddish(image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
      
        let redCount = 0;
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
      
        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];
      
          if (red > green + blue) {
            redCount++;
          }
        }
      
        return redCount > (image.width * image.height) / 2;
      }