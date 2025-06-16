 // Variables simples
        let taskCount = 0;

        // Fonction pour ajouter une tâche
        function addTask() {
            const input = document.getElementById('newTask');
            const text = input.value.trim();
            
            if (text === '') return;
            
            // Créer la tâche directement dans le HTML
            const taskList = document.getElementById('taskList');
            
            // Supprimer le message vide si c'est la première tâche
            if (taskCount === 0) {
                taskList.innerHTML = '';
            }
            
            // Créer l'élément tâche
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <input type="checkbox" onchange="toggleTask(this)">
                <span class="task-text">${text}</span>
                <button class="delete-btn" onclick="deleteTask(this)">✖</button>
            `;
            
            taskList.appendChild(taskDiv);
            
            // Nettoyer et compter
            input.value = '';
            taskCount++;
            updateCounter();
        }

        // Fonction pour marquer comme terminé
        function toggleTask(checkbox) {
            const task = checkbox.parentElement;
            if (checkbox.checked) {
                task.classList.add('completed');
            } else {
                task.classList.remove('completed');
            }
        }

        // Fonction pour supprimer une tâche
        function deleteTask(button) {
            const task = button.parentElement;
            task.remove();
            taskCount--;
            updateCounter();
            
            // Remettre le message vide si plus de tâches
            if (taskCount === 0) {
                document.getElementById('taskList').innerHTML = `
                    <div class="empty-message">
                        Aucune tâche pour le moment. Ajoutez-en une !
                    </div>
                `;
            }
        }

        // Mettre à jour le compteur
        function updateCounter() {
            document.getElementById('counter').textContent = `${taskCount} tâche(s)`;
        }

        // Ajouter avec la touche Entrée
        document.getElementById('newTask').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTask();
        });
