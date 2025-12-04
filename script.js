document.addEventListener('DOMContentLoaded', () => {
    const namaLengkapInput = document.getElementById('namaLengkap');
    if (namaLengkapInput) {
        namaLengkapInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
    }

    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', (e) => {
            const namaLengkap = document.getElementById('namaLengkap').value;
            if (namaLengkap && namaLengkap.length >= 3) {
                // Hapus semua data kuis lama saat memulai
                localStorage.removeItem('answers');
                localStorage.removeItem('remainingTime');
                localStorage.removeItem('skorPeserta');
                localStorage.removeItem('correctAnswers');
                localStorage.removeItem('jawabanBenar');
                localStorage.removeItem('jawabanSalah');
                localStorage.removeItem('nilaiPeserta');

                localStorage.setItem('namaPeserta', namaLengkap);
                window.location.href = 'quiz.html';
            } else {
                e.preventDefault();
                alert('Nama harus minimal 3 karakter!');
            }
        });
    }

    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        let currentQuestionIndex = 0;
        // Pastikan 'questions' tersedia (dari questions.js)
        const totalQuestions = questions ? questions.length : 0; 
        
        let answers = JSON.parse(localStorage.getItem('answers')) || new Array(totalQuestions).fill(null);
        let totalTime = parseInt(localStorage.getItem('remainingTime')) || 60 * 60;
        let timerInterval;

        const questionNumber = document.querySelector('.question-number');
        const questionText = document.querySelector('.question-text');
        const answerButtons = document.querySelectorAll('.answer-button');
        const navButtons = document.querySelector('.navigation-buttons');
        const prevButton = document.querySelector('.nav-button-prev');
        const nextButton = document.querySelector('.nav-button-next');
        const timerDisplay = document.getElementById('timer');
        const modal = document.getElementById('questionListModal');
        const showQuestionListBtn = document.getElementById('showQuestionList');
        const closeModalBtn = document.querySelector('.close-button');
        const questionListGrid = document.getElementById('questionListGrid');
        const warningModal = document.getElementById('warningModal');
        const warningMessage = document.getElementById('warningMessage');
        const returnToQuizBtn = document.getElementById('returnToQuizBtn');
        const unansweredList = document.getElementById('unansweredList');
        const questionImage = document.getElementById('questionImage'); 

        showQuestionListBtn.onclick = function() {
            modal.style.display = "flex";
            generateQuestionList();
        };

        closeModalBtn.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

        if (returnToQuizBtn) {
            returnToQuizBtn.onclick = function() {
                warningModal.style.display = 'none';
            };
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                const minutes = Math.floor(totalTime / 60);
                const seconds = totalTime % 60;
                timerDisplay.textContent = `SISA WAKTU : ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                totalTime--;
                localStorage.setItem('remainingTime', totalTime);
                if (totalTime < 0) {
                    clearInterval(timerInterval);
                    calculateScore();
                    localStorage.removeItem('answers');
                    localStorage.removeItem('remainingTime');
                    alert('Waktu habis! Kuis selesai.');
                    window.location.href = 'ujian-selesai.html';
                }
            }, 1000);
        }

        function loadQuestion(index) {
            currentQuestionIndex = index;
            if (!questions || questions.length === 0) {
                questionText.textContent = "Tidak ada soal yang tersedia.";
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
                return;
            }

            const currentQuestion = questions[currentQuestionIndex];
            questionNumber.textContent = `SOAL NOMOR ${currentQuestionIndex + 1}`;
            
            // Menggunakan innerHTML agar tag HTML dibaca
            questionText.innerHTML = currentQuestion.soal; 

            // Logika untuk gambar
            if (currentQuestion.gambar && questionImage) {
                questionImage.src = currentQuestion.gambar;
                questionImage.style.display = 'block'; 
            } else if (questionImage) {
                questionImage.src = '';
                questionImage.style.display = 'none'; 
            }

            const choices = ['A. ', 'B. ', 'C. ', 'D. '];
            answerButtons.forEach((button, i) => {
                button.innerHTML = `<span>${choices[i]}</span>${currentQuestion.pilihan[i]}`;
                button.setAttribute('role', 'button');
                button.setAttribute('aria-label', `Pilih jawaban ${choices[i]}`);
                button.classList.remove('selected');
            });

            if (answers[currentQuestionIndex]) {
                answerButtons.forEach(button => {
                    const answerTextInButton = button.textContent.substring(3).trim();
                    if (answerTextInButton === answers[currentQuestionIndex].trim()) {
                        button.classList.add('selected');
                    }
                });
            } else {
                 // Hapus seleksi jika jawaban belum ada
                answerButtons.forEach(button => button.classList.remove('selected'));
            }

            if (currentQuestionIndex === 0) {
                prevButton.style.display = 'none';
                navButtons.style.justifyContent = 'flex-end';
            } else {
                prevButton.style.display = 'block';
                navButtons.style.justifyContent = 'space-between';
            }

            nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'SELESAI' : 'SOAL SELANJUTNYA';
        }

        function generateQuestionList() {
            questionListGrid.innerHTML = '';
            questions.forEach((q, index) => {
                const questionItem = document.createElement('div');
                questionItem.textContent = index + 1;
                questionItem.classList.add('question-item');

                if (answers[index]) {
                    questionItem.classList.add('answered');
                }

                if (index === currentQuestionIndex) {
                    questionItem.classList.add('current');
                }

                questionItem.addEventListener('click', () => {
                    loadQuestion(index);
                    modal.style.display = "none";
                });
                questionListGrid.appendChild(questionItem);
            });
        }

        function checkUnansweredQuestions() {
            const unanswered = [];
            for (let i = 0; i < questions.length; i++) {
                if (!answers[i]) {
                    unanswered.push(i + 1);
                }
            }
            return unanswered;
        }

        answerButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedAnswer = button.textContent.substring(3).trim();
                answers[currentQuestionIndex] = selectedAnswer;
                answerButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                localStorage.setItem('answers', JSON.stringify(answers));
            });
        });

        prevButton.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {
                const unanswered = checkUnansweredQuestions();
                if (unanswered.length > 0) {
                    warningMessage.innerHTML = `
                        <p class="warning-text">BEBERAPA SOAL BELUM DIJAWAB.</p>
                        <p class="warning-text">ANDA WAJIB MENJAWAB SEMUA PERTANYAAN.</p>
                        <p>Soal yang belum dijawab:</p>
                    `;
                    unansweredList.innerHTML = '';
                    unanswered.forEach(num => {
                        const item = document.createElement('span');
                        item.textContent = num;
                        item.classList.add('unanswered-item');
                        unansweredList.appendChild(item);
                        item.addEventListener('click', () => {
                            loadQuestion(num - 1);
                            warningModal.style.display = 'none';
                        });
                    });
                    warningModal.style.display = 'flex';
                } else {
                    calculateScore();
                    clearInterval(timerInterval);
                    localStorage.removeItem('answers');
                    localStorage.removeItem('remainingTime');
                    window.location.href = 'ujian-selesai.html';
                }
            }
        });

        loadQuestion(currentQuestionIndex);
        startTimer();
    }

    function calculateScore() {
        // Pastikan 'questions' tersedia dari questions.js
        if (typeof questions === 'undefined' || questions.length === 0) {
            console.error('Array questions tidak ditemukan atau kosong.');
            return;
        }

        const answers = JSON.parse(localStorage.getItem('answers')) || [];
        const namaPeserta = localStorage.getItem('namaPeserta');
        let score = 0;
        let correctAnswers = [];
        let jawabanBenar = 0;
        let jawabanSalah = 0;
        let jawabanString = '';
        const totalSoal = questions.length; // Gunakan panjang array questions yang sebenarnya

        if (answers.length !== totalSoal) {
             // Ini harusnya tidak terjadi jika kuis berjalan normal, tapi untuk amannya:
            console.warn(`Jumlah jawaban (${answers.length}) tidak sesuai dengan jumlah soal (${totalSoal}).`);
        }

        for (let index = 0; index < totalSoal; index++) {
            const currentQuestion = questions[index];
            const answer = answers[index] || ''; // Gunakan jawaban yang tersimpan, atau string kosong jika belum dijawab
            
            const isCorrect = currentQuestion && answer.trim() === currentQuestion.jawabanBenar.trim();
            if (isCorrect) {
                score++;
                jawabanBenar++;
                correctAnswers.push(1);
            } else {
                jawabanSalah++;
                correctAnswers.push(0);
            }

            // Map jawaban ke huruf A/B/C/D
            let pilihanChar = 'X';
            if (currentQuestion) {
                 const pilihanIndex = currentQuestion.pilihan.findIndex(p => p.trim() === answer.trim());
                 pilihanChar = (pilihanIndex !== -1) ? String.fromCharCode(65 + pilihanIndex) : 'X';
            }
            jawabanString += pilihanChar;
        }

        const nilai = totalSoal > 0 ? Math.round((jawabanBenar / totalSoal) * 100) : 0;

        // **PENTING: Hapus Padding/Slice yang Membatasi Jumlah Soal (Fix)**
        // Kita tidak perlu membatasi atau mengisi (pad) array, cukup gunakan data yang sebenarnya.
        
        let allPesertaData = JSON.parse(localStorage.getItem('allPesertaData')) || [];
        allPesertaData.push({
            no: allPesertaData.length + 1,
            nama: namaPeserta,
            jawaban: jawabanString,
            status: 'Ok!',
            scores: correctAnswers,
            benar: jawabanBenar,
            salah: jawabanSalah,
            nilaiAkhir: nilai,
            tanggal: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
        });
        localStorage.setItem('allPesertaData', JSON.stringify(allPesertaData));

        localStorage.setItem('skorPeserta', score);
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
        localStorage.setItem('jawabanBenar', jawabanBenar);
        localStorage.setItem('jawabanSalah', jawabanSalah);
        localStorage.setItem('nilaiPeserta', nilai);
    }
});