import Swal from 'sweetalert2';

//Components
export function popUp( type, title, text) {
   Swal.fire({
      title: title,
      text: text,
      icon: type,
      confirmButtonText: 'Cool'
   })
}
export function toolTip(id) {
   // eslint-disable-next-line
   $('#' + id).tooltip('show')
}
//Data