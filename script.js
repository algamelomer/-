function startAnalysis() {
    // Show loading message
    document.getElementById('loading').classList.remove('hidden');

    // Simulate a delay for analysis
    setTimeout(function() {
        // Hide loading message
        document.getElementById('loading').classList.add('hidden');

        // Show result
        document.getElementById('result').classList.remove('hidden');
    }, 3000); // 3 seconds delay
}