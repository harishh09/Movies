function selectPlan(plan) {
    document.getElementById('selected-plan').textContent = plan;
  }
  
  function submitForm() {
    const selectedPlan = document.getElementById('selected-plan').textContent;
    alert(`You have selected the ${selectedPlan} plan.`);
  }