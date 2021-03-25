 function createPdfPreview2(fileContents, $displayElement) {
     PDFJS.getDocument(fileContents).then(function (pdf) {
         pdf.getPage(1).then(function (page) {
             var $previewContainer = $displayElement.find('.preview__thumb');
             var canvas = $previewContainer.find('canvas')[0];
             canvas.height = $previewContainer.innerHeight();
             canvas.width = $previewContainer.innerWidth();

             var viewport = page.getViewport(1);
             var scaleX = canvas.width / viewport.width;
             var scaleY = canvas.height / viewport.height;
             var scale = (scaleX < scaleY) ? scaleX : scaleY;
             var scaledViewport = page.getViewport(scale);

             var context = canvas.getContext('2d');
             var renderContext = {
                 canvasContext: context,
                 viewport: scaledViewport
             };
             page.render(renderContext);
         });
     });
 }





 function createPreview2(file, fileContents) {
     var $previewElement = '';
     switch (file.type) {
         case 'image/png':
         case 'image/jpeg':
         case 'image/gif':
             $previewElement = $('<img src="' + fileContents + '" />');
             break;
         case 'video/mp4':
         case 'video/webm':
         case 'video/ogg':
             $previewElement = $('<video autoplay muted width="100%" height="100%"><source src="' + fileContents + '" type="' + file.type + '"></video>');
             break;
         case 'application/pdf':
             $previewElement = $('<canvas id="" width="100%" height="100%"></canvas>');
             break;
         default:
             break;
     }
     var $displayElement = $('<div class="preview">\
                               <i class="fa fa-paperclip" aria-hidden="true"></i>\
                               <div><span class="preview__name" title="' + file.name + '">' + file.name + '</span>\
<a href="" download><i class="fa fa-download" aria-hidden="true"></i>Download</a>\
                                    <a href=""><i class="fa fa-trash" aria-hidden="true"></i>Delete</a></div>\
                                </div>\
');
     $displayElement.find('.preview__thumb').append($previewElement);
     $('.upload__files2').append($displayElement);
 }

 function fileInputChangeHandler2(e) {
     var URL = window.URL || window.webkitURL;
     var fileList = e.target.files;

     if (fileList.length > 0) {
         $('.upload__files2').html('');

         for (var i = 0; i < fileList.length; i++) {
             var file = fileList[i];
             var fileUrl = URL.createObjectURL(file);
             createPreview2(file, fileUrl);
         }
     }
 }



 function createPreview(file, fileContents) {
     var $previewElement = '';
     switch (file.type) {
         case 'image/png':
         case 'image/jpeg':
         case 'image/gif':
             $previewElement = $('<img src="' + fileContents + '" />');
             break;
         case 'video/mp4':
         case 'video/webm':
         case 'video/ogg':
             $previewElement = $('<video autoplay muted width="100%" height="100%"><source src="' + fileContents + '" type="' + file.type + '"></video>');
             break;
         case 'application/pdf':
             $previewElement = $('<canvas id="" width="100%" height="100%"></canvas>');
             break;
         default:
             break;
     }
     var $displayElement = $('<div class="preview">\
                               <div class="preview__thumb"></div>\
                               <span class="preview__name" title="' + file.name + '">' + file.name + '</span>\
                               <span class="preview__type" title="' + file.type + '">' + file.type + '</span>\
                             </div>');
     $displayElement.find('.preview__thumb').append($previewElement);
     $('.upload__files').append($displayElement);

 }

 function fileInputChangeHandler(e) {
     var URL = window.URL || window.webkitURL;
     var fileList = e.target.files;

     if (fileList.length > 0) {
         $('.upload__files').html('');

         for (var i = 0; i < fileList.length; i++) {
             var file = fileList[i];
             var fileUrl = URL.createObjectURL(file);
             createPreview(file, fileUrl);
         }
     }
 }



 $(document).ready(function () {
     $('.uploadImage>input:file').on('change', fileInputChangeHandler);
     $('.uploadText>input:file').on('change', fileInputChangeHandler2);
 });

 //})(jQuery.noConflict());
