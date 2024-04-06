function convert() {
    // Get input value (in inches)
    const inches = parseFloat(document.getElementById('inchesInput').value);
    
    // Convert inches to meters
    const meters = inches * 0.0254;
  
    // Update result span with the converted value
    document.getElementById('result').textContent = meters.toFixed(2);
  }
  