function Amplify() {
    window.onload = function () {
        const data = {
          img: [
            {a: '../assets/travel/l-img.jpg', s: '../assets/travel/s-img.jpg'},
          ]
        };
        const magnifyId = 0
      
        magnify();
        function magnify () {
          let mask = null,
            magnify = null;
          let maskParent = document.querySelector('.preview-wrap  .zoom');
          let maskImg = document.querySelector('.preview-wrap  .zoom > img');
          let magnifyParent = document.querySelector('.preview-wrap');
          maskImg.src = data.img[magnifyId].s;
      
          maskParent.addEventListener('mouseenter', function () {
            if(!mask) {
              mask = document.createElement('div');
              mask.className = 'mask';
      
              maskParent.appendChild(mask);
            }
      
            if(!magnify) {
              let imgSrc = document.createElement('img');
              magnify = document.createElement('div');
              magnify.className = 'magnify';
              imgSrc.src = data.img[magnifyId].a;
              magnify.appendChild(imgSrc);
      
              magnifyParent.appendChild(magnify);
            }
      
            maskParent.onmousemove = function (event) {
              let maskPosition = {
                left: event.clientX - mask.clientWidth / 2 - maskParent.getBoundingClientRect().left,
                top: event.clientY - mask.clientHeight / 2 - maskParent.getBoundingClientRect().top
              };
              if(maskPosition.left <= 0) {
                maskPosition.left = 0;
              }else if (maskPosition.left >= maskParent.offsetWidth - mask.offsetWidth) {
                maskPosition.left = maskParent.offsetWidth - mask.offsetWidth;
              }
              
              mask.style.left = maskPosition.left + 'px'
              mask.style.top = maskPosition.top + 'px'
      
              let imgWidth = document.querySelector('.preview-wrap > .magnify img');
              let scale = (maskParent.clientWidth - mask.clientWidth) / (imgWidth.clientWidth - magnify.clientWidth);
              imgWidth.style.marginLeft = - maskPosition.left / scale + 'px';
              imgWidth.style.marginTop = - maskPosition.top / scale + 'px';
            }
            ;maskParent.onmouseleave = function () {
              maskParent.removeChild(mask);
              magnifyParent.removeChild(magnify);
      
              mask = null;
              magnify = null;
      
              maskParent.onmousemove = null;
              maskParent.onmouseleave = null;
            }
          })
        }  
      }
}
export default Amplify