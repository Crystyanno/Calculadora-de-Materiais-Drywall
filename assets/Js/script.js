          
        /* ===================================
           CONTROLE DE VISIBILIDADE - ALTURA
        =================================== */
        document.getElementById('systemType').addEventListener('change', function() {
            const heightGroup = document.getElementById('heightGroup');
            const heightInput = document.getElementById('height');
            
            if (this.value === 'parede' || this.value === 'ambos') {
                heightGroup.classList.remove('hidden');
                heightInput.required = true;
            } else {
                heightGroup.classList.add('hidden');
                heightInput.required = false;
                heightInput.value = '';
            }
        });

        /* ===================================
           FUNÇÃO PRINCIPAL DE CÁLCULO
        =================================== */
        function calcular() {
            // Obter valores do formulário
            const systemType = document.getElementById('systemType').value;
            const height = parseFloat(document.getElementById('height').value);
            const area = parseFloat(document.getElementById('area').value);
            const plateType = document.getElementById('plateType').value;

            // Validações
            if (!systemType) {
                alert('Por favor, selecione o tipo de sistema.');
                return;
            }

            if (!area || area <= 0) {
                alert('Por favor, insira uma área válida.');
                return;
            }

            if (!plateType) {
                alert('Por favor, selecione o tipo de placa.');
                return;
            }

            if ((systemType === 'parede' || systemType === 'ambos') && (!height || height <= 0)) {
                alert('Por favor, insira a altura do pé-direito.');
                return;
            }

            // Calcular área da placa
            const plateArea = plateType === '1.8' ? 2.16 : 2.88;

            // Gerar HTML dos resultados
            let html = '';

            if (systemType === 'parede' || systemType === 'ambos') {
                const paredeData = calcularParede(area, plateArea);
                html += gerarHTMLParede(paredeData, area, height);
            }

            if (systemType === 'forro' || systemType === 'ambos') {
                const forroData = calcularForro(area, plateArea);
                html += gerarHTMLForro(forroData, area);
            }

            // Exibir resultados
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = html;
            resultsDiv.classList.add('results--show');
            resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        /* ===================================
           CÁLCULO - MATERIAIS DE PAREDE
        =================================== */
        function calcularParede(area, plateArea) {
            const data = {};
            
            // Placas (com 1m² de sobra)
            data.placas = Math.ceil((area + 1) / plateArea);
            
            // Guias
            const guiaMetros = area * 0.80;
            data.guiaMetros = Math.ceil(guiaMetros);
            data.guiaPecas = Math.ceil(guiaMetros / 3);
            
            // Montantes
            const montanteMetros = area * 2.50;
            data.montanteMetros = Math.ceil(montanteMetros);
            data.montantePecas = Math.ceil(montanteMetros / 3);
            
            // Parafusos
            data.parafusoTA25 = Math.ceil(area * 15);
            data.parafusoBrocante = Math.ceil(area * 3);
            
            // Massa de junta
            const massaKg = area * 0.50;
            data.massaKg = Math.ceil(massaKg);
            data.massaBaldes = Math.ceil(massaKg / 28);
            
            // Fita de papel
            const fitaMetros = area * 1.50;
            data.fitaMetros = Math.ceil(fitaMetros);
            data.fitaRolos = Math.ceil(fitaMetros / 150);
            
            // Lã mineral
            data.laMineralM2 = Math.ceil(area * 1.05);
            
            return data;
        }

        /* ===================================
           CÁLCULO - MATERIAIS DE FORRO
        =================================== */
        function calcularForro(area, plateArea) {
            const data = {};
            
            // Placas (com 1m² de sobra)
            data.placas = Math.ceil((area + 1) / plateArea);
            
            // Perfil F530 (modulação 0,60m x 0,60m)
            const perfilTMetros = area * 1.70;
            data.perfilTMetros = Math.ceil(perfilTMetros);
            data.perfilTPecas = Math.ceil(perfilTMetros / 3);
            
            // Reguladores
            data.reguladores = Math.ceil(area * 1.27);
            
            // Tabica (perímetro)
            const tabicaMetros = area * 1.10;
            data.tabicaMetros = Math.ceil(tabicaMetros);
            data.tabicaPecas = Math.ceil(tabicaMetros / 3);
            
            // Parafusos
            data.parafusoTA25 = Math.ceil(area * 10);
            data.parafusoBrocante = Math.ceil(area * 2);
            
            // Massa de junta
            const massaKg = area * 0.50;
            data.massaKg = Math.ceil(massaKg);
            data.massaBaldes = Math.ceil(massaKg / 28);
            
            // Fita de papel
            const fitaMetros = area * 1.50;
            data.fitaMetros = Math.ceil(fitaMetros);
            data.fitaRolos = Math.ceil(fitaMetros / 150);
            
            return data;
        }

        /* ===================================
           GERAÇÃO DE HTML - PAREDE
        =================================== */
        function gerarHTMLParede(data, area, height) {
            return `
                <div class="result-section">
                    <h2 class="result-section__title">🧱 Materiais para Parede (${area.toFixed(2)} m²)</h2>
                    <p class="result-section__subtitle">Pé-direito: ${height.toFixed(2)}m</p>
                    
                    <div class="material-item">
                        <span class="material-item__name">Placas de Drywall</span>
                        <span class="material-item__qty">${data.placas} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Guias (perfil 3m)</span>
                        <span class="material-item__qty">${data.guiaMetros}m / ${data.guiaPecas} peças</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Montantes (perfil 3m)</span>
                        <span class="material-item__qty">${data.montanteMetros}m / ${data.montantePecas} peças</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Parafuso Ponta Agulha TA25</span>
                        <span class="material-item__qty">${data.parafusoTA25} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Parafuso Brocante (LA/PA)</span>
                        <span class="material-item__qty">${data.parafusoBrocante} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Massa de Junta</span>
                        <span class="material-item__qty">${data.massaKg}kg / ${data.massaBaldes} baldes de 28kg</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Fita de Papel para Junta</span>
                        <span class="material-item__qty">${data.fitaMetros}m / ${data.fitaRolos} rolos de 150m</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Lã Mineral (isolamento)</span>
                        <span class="material-item__qty">${data.laMineralM2} m²</span>
                    </div>
                </div>
            `;
        }

        /* ===================================
           GERAÇÃO DE HTML - FORRO
        =================================== */
        function gerarHTMLForro(data, area) {
            return `
                <div class="result-section">
                    <h2 class="result-section__title">🏠 Materiais para Forro (${area.toFixed(2)} m²)</h2>
                    
                    <div class="material-item">
                        <span class="material-item__name">Placas de Drywall</span>
                        <span class="material-item__qty">${data.placas} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Perfil F530 (3m)</span>
                        <span class="material-item__qty">${data.perfilTMetros}m / ${data.perfilTPecas} peças</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Reguladores</span>
                        <span class="material-item__qty">${data.reguladores} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Tabica (3m)</span>
                        <span class="material-item__qty">${data.tabicaMetros}m / ${data.tabicaPecas} peças</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Parafuso Ponta Agulha TA25</span>
                        <span class="material-item__qty">${data.parafusoTA25} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Parafuso Brocante (LA/PA)</span>
                        <span class="material-item__qty">${data.parafusoBrocante} unidades</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Massa de Junta</span>
                        <span class="material-item__qty">${data.massaKg}kg / ${data.massaBaldes} baldes de 28kg</span>
                    </div>
                    
                    <div class="material-item">
                        <span class="material-item__name">Fita de Papel para Junta</span>
                        <span class="material-item__qty">${data.fitaMetros}m / ${data.fitaRolos} rolos de 150m</span>
                    </div>
                </div>
            `;
        }
