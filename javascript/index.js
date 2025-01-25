function GenerateAkanName() {
  //Get selected gender
  const gender=document.querySelector('input[name="gender"]:checked')?.value;
  //Check if gender is selected
  if (!gender) {
    alert("Select gender!");
    return; 
  }
  // Akan names based on gender and days of the week
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  ss