document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: '/api/turno', 
      
      eventClick: function(info) {
          if (confirm("Tem certeza que deseja excluir este turno?")) {
              // DELETE para o backend para excluir o turno
              var eventoId = info.event.id; 
              // Supondo que o ID do turno está no campo 'id' do evento

              fetch(`/api/turno/${eventoId}`, {
                  method: 'DELETE',
              })
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Erro ao deletar o turno');
                  }
                  return response.json();
              })
              .then(data => {
                  console.log('Turno deletado com sucesso:', data);
                  calendar.refetchEvents(); 
                  // Atualiza os eventos no calendário
              })
              .catch(error => {
                  console.error('Erro:', error);
                  alert('Ocorreu um erro ao deletar o turno. Por favor, tente novamente.');
              });
          }
      }
  });

  calendar.render();
});

