const body = document.querySelector(".row")
body.innerHTML+=`
<div class="col s12 m2 container">
  <div class="card">
    <div class="card-image">
      <div class="back">
        
        <input type="checkbox" id="horns" style="opacity: 1; position: relative;">
        <label for="horns">Horns</label><br>
        <input type="checkbox" id="horns2" style="opacity: 1; position: relative;">
        <label for="horns2">Horns2</label><br>
        <input type="checkbox" id="horns3" style="opacity: 1; position: relative;">
        <label for="horns3">Horns3</label><br>
      </div>
      
      <button class="waves-effect waves-light btn btn-pronto">Pronto!</button>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
</div>`