        let history = [];
        
        let currencyFacts = [
            "KZT (tenge) was introduced in Kazakhstan in 1993",
            "USD (dollar) is the most popular currency in the world",
            "EUR (euro) is used in 20 European countries",
            "The word 'dollar' comes from the German word 'Thaler'",
            "The first paper money was used in China over 1000 years ago",
            "Bitcoin was created in 2009 by an unknown person named Satoshi Nakamoto"
        ];
        
        let exchangeRates = {
            "KZT": {"USD": 0.00214, "EUR": 0.00198, "KZT": 1},
            "USD": {"KZT": 467, "EUR": 0.92, "USD": 1},
            "EUR": {"KZT": 505, "USD": 1.09, "EUR": 1}
        };
        
        function convertCurrency() {
            let amount = document.getElementById("amount").value;
            let from = document.getElementById("from").value;
            let to = document.getElementById("to").value;
            
            if (amount <= 0) {
                alert("Please enter a positive number!");
                return;
            }
            
            // Convert
            let rate = exchangeRates[from][to];
            let result = amount * rate;
            
            // Round to 2 decimal places
            let roundedResult = result.toFixed(2);
            
            // Format result
            let resultText = amount + " " + from + " = " + roundedResult + " " + to;
            
            // Show result
            document.getElementById("result").textContent = resultText;
            
            // 4. ADD TO HISTORY ARRAY (push() - from the book!)
            history.push(resultText);
            
            // 5. UPDATE history display
            updateHistory();
            
            // 6. SHOW RANDOM FACT (Math.random() - from the book!)
            showRandomFact();
        }
        
        // 7. FUNCTION to update history
        function updateHistory() {
            let historyList = document.getElementById("history-list");
            
            // Clear list
            historyList.innerHTML = "";
            
            // 8. LOOP through array (for - from the book!)
            for (let i = 0; i < history.length; i++) {
                // Create list item
                let li = document.createElement("li");
                li.textContent = history[i];
                
                // Add to list
                historyList.appendChild(li);
            }
            
            // 9. LIMIT history to 10 entries (if - from the book!)
            if (history.length > 10) {
                // Remove first entry (shift() - from the book!)
                history.shift();
                updateHistory(); // update again
            }
        }
        
        // 10. FUNCTION to show random fact
        function showRandomFact() {
            // Get random index (Math.floor and Math.random - from the book!)
            let randomIndex = Math.floor(Math.random() * currencyFacts.length);
            let randomFact = currencyFacts[randomIndex];
            
            document.getElementById("fact").textContent = "💡 " + randomFact;
        }
        
        // 11. FUNCTION to clear history
        function clearHistory() {
            // Clear array
            history = [];
            
            // Update display
            updateHistory();
            
            alert("History cleared!");
        }
        
        // 12. ON PAGE LOAD show first result
        convertCurrency();
        
        // 13. ADDITIONAL: Update result when typing
        document.getElementById("amount").addEventListener("input", convertCurrency);
        document.getElementById("from").addEventListener("change", convertCurrency);
        document.getElementById("to").addEventListener("change", convertCurrency);
