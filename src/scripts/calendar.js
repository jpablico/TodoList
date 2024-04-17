function createCalendar() {
	const date = new Date();
	const today = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstDay = new Date(year, month, 1).getDay();
  
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
  
	let calendarHTML = `<h2 class="calendar-heading">${monthNames[month]} ${year}</h2><table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>`;
  
	for (let i = 0; i < firstDay; i++) {
	  calendarHTML += '<td class="day"></td>';
	}
  
	for (let i = 1; i <= daysInMonth; i++) {
	  if (i === today) {
		calendarHTML += `<td class="day today">${i}</td>`;
	  } else if ((i + firstDay) % 7 === 0) {
		calendarHTML += `<td class="day">${i}</td></tr><tr>`;
	  } else {
		calendarHTML += `<td class="day">${i}</td>`;
	  }
	}
  
	calendarHTML += '</tr></table>';
  
	document.getElementById('calendar').innerHTML = calendarHTML;
  }
  
  export { createCalendar };