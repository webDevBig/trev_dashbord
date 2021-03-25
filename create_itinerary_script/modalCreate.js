var exampleModal = document.getElementById('tripCreateModal');
        //отримали елементи табів
        let articles = document.getElementsByClassName('nav-link');
        let cont = document.getElementsByClassName('tab-pane');

        exampleModal.addEventListener('show.bs.modal', function(event) {
            // Button that triggered the modal
            var button = event.relatedTarget
            // Extract info from data-bs-* attributes

            //отримати назву класу кнопки яка викликає модалку
            var recipient = button.className;
            button.addEventListener('click', selectDate);

            function selectDate() {
                for (var i = 0; i < articles.length; i++) {
                    //якщо має такий самий клас як кнопка то додається active
                    if (articles[i].classList.contains(recipient)) {
                        articles[i].classList.add('active');
                    }
                }
                for (var i = 0; i < cont.length; i++) {
                    //якщо має такий самий клас як кнопка то додається active
                    if (cont[i].id == recipient) {
                        cont[i].classList.add('active');
                        cont[i].classList.add('show');
                    }
                }
            }

        })
        exampleModal.addEventListener('hide.bs.modal', function(event) {

            function selectDate() {
                for (var i = 0; i < articles.length; i++) {
                    articles[i].classList.remove('active');
                }
                for (var i = 0; i < cont.length; i++) {
                    cont[i].classList.remove('active');
                    cont[i].classList.remove('show');
                }
            }
            selectDate();
        })