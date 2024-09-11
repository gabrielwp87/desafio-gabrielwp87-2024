class RecintosZoo {

    analisaRecintos(animal, quantidade) {

        if (quantidade < 1) {
            return {
                erro: "Quantidade inválida"
              }
        }

        const LEAO = "LEAO"
        const LEOPARDO = "LEOPARDO"
        const CROCODILO = "CROCODILO"
        const MACACO = "MACACO"
        const GAZELA = "GAZELA"
        const HIPOPOTAMO = "HIPOPOTAMO"

        const anmaisNoZoo = [LEAO, LEOPARDO, CROCODILO, MACACO, GAZELA, HIPOPOTAMO]

        if (!(anmaisNoZoo.includes(animal.toUpperCase()))) {
            return {
                erro: "Animal inválido"
              }
        }

        // Valores de tamanho de cada animal, pode ser alterado.
        const LEAO_VALUE = 3
        const LEOPARDO_VALUE = 2
        const CROCODILO_VALUE = 3
        const MACACO_VALUE = 1
        const GAZELA_VALUE = 2
        const HIPOPOTAMO_VALUE = 4

        // Pode ser feito alteração nos espaços livres e total, assim como quais animais estão em cada recinto,
        // mas não pode ser feita alteração no tipo que cada recinto é.
        let recintos = {
            "Recinto 1": {"espaço livre": 7, "espaço total": 10, "animais":[MACACO]},     // savana
            "Recinto 2": {"espaço livre": 5, "espaço total": 5, "animais":[]},              // floresta
            "Recinto 3": {"espaço livre": 5, "espaço total": 7, "animais":[GAZELA]},      // savana e rio
            "Recinto 4": {"espaço livre": 8, "espaço total": 8, "animais":[]},              // rio
            "Recinto 5": {"espaço livre": 6, "espaço total": 9, "animais":[LEAO]}         // savana
        }

        /*
        Abaixo está a lógica feita para acomodar os animais do zoollógico,
        o programa foi pensando permitindo alterações em tudo que não for 
        a quantidade de recintos e animais e ambos os seus tipos.
        1 espaço extra é dado quando animais diferentes habitam o memsmo recinto,
        seja 2 diferentes ou mais de 2, apenas 1 espaço extra é dado
        */
        // Caso do Leão, só pode ter ele (regra 2) e tem que ser em savana
        if (animal.toUpperCase() == LEAO) {
            let resposta1 = ""
            let resposta2 = ""
            let resposta3 = ""

            if(!(recintos["Recinto 1"].animais.includes(LEOPARDO) || recintos["Recinto 1"].animais.includes(MACACO)
             || recintos["Recinto 1"].animais.includes(GAZELA) || recintos["Recinto 1"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEAO_VALUE <= recintos["Recinto 1"]["espaço livre"]) {
                    recintos["Recinto 1"]["espaço livre"] = recintos["Recinto 1"]["espaço livre"] - quantidade * LEAO_VALUE
                    const livre = recintos["Recinto 1"]["espaço livre"]
                    const total = recintos["Recinto 1"]["espaço total"]
                    
                    resposta1 = `Recinto 1 (espaço livre: ${livre} total: ${total})`
                }
            }

            if(!(recintos["Recinto 3"].animais.includes(LEOPARDO) || recintos["Recinto 3"].animais.includes(CROCODILO)
                || recintos["Recinto 3"].animais.includes(MACACO) || recintos["Recinto 3"].animais.includes(GAZELA) 
                || recintos["Recinto 3"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEAO_VALUE <= recintos["Recinto 3"]["espaço livre"]) {
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * LEAO_VALUE
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]
                    
                    resposta2 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                }
            }

            if(!(recintos["Recinto 5"].animais.includes(LEOPARDO) || recintos["Recinto 5"].animais.includes(MACACO)
             || recintos["Recinto 5"].animais.includes(GAZELA) || recintos["Recinto 5"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEAO_VALUE <= recintos["Recinto 5"]["espaço livre"]) {
                    recintos["Recinto 5"]["espaço livre"] = recintos["Recinto 5"]["espaço livre"] - quantidade * LEAO_VALUE
                    const livre = recintos["Recinto 5"]["espaço livre"]
                    const total = recintos["Recinto 5"]["espaço total"]
                    
                    resposta3 = `Recinto 5 (espaço livre: ${livre} total: ${total})`
                }
            }

            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 1"].animais.includes(LEAO)) {
                    recintos["Recinto 1"].animais.push(LEAO)
                }

            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 3"].animais.includes(LEAO)) {
                    recintos["Recinto 3"].animais.push(LEAO)
                }
            }
            if (resposta3) {
                resultado.push(resposta3)
                if(!recintos["Recinto 5"].animais.includes(LEAO)) {
                    recintos["Recinto 5"].animais.push(LEAO)
                }
            }

            if (resposta1 || resposta2 || resposta3) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        // Caso do Leopardo, só pode ter ele (regra 2) e tem que ser em savana
        if (animal.toUpperCase() == LEOPARDO) {
            let resposta1 = ""
            let resposta2 = ""
            let resposta3 = ""

            if(!(recintos["Recinto 1"].animais.includes(LEAO) || recintos["Recinto 1"].animais.includes(MACACO)
             || recintos["Recinto 1"].animais.includes(GAZELA) || recintos["Recinto 1"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEOPARDO_VALUE <= recintos["Recinto 1"]["espaço livre"]) {
                    recintos["Recinto 1"]["espaço livre"] = recintos["Recinto 1"]["espaço livre"] - quantidade * LEOPARDO_VALUE
                    const livre = recintos["Recinto 1"]["espaço livre"]
                    const total = recintos["Recinto 1"]["espaço total"]
                    
                    resposta1 = `Recinto 1 (espaço livre: ${livre} total: ${total})`
                }
            }

            if(!(recintos["Recinto 3"].animais.includes(LEAO) || recintos["Recinto 3"].animais.includes(CROCODILO)
                || recintos["Recinto 3"].animais.includes(MACACO) || recintos["Recinto 3"].animais.includes(GAZELA) 
                || recintos["Recinto 3"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEOPARDO_VALUE <= recintos["Recinto 3"]["espaço livre"]) {
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * LEOPARDO_VALUE
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]
                    
                    resposta2 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                }
            }

            if(!(recintos["Recinto 5"].animais.includes(LEAO) || recintos["Recinto 5"].animais.includes(MACACO)
             || recintos["Recinto 5"].animais.includes(GAZELA) || recintos["Recinto 5"].animais.includes(HIPOPOTAMO))) {
                if (quantidade * LEOPARDO_VALUE <= recintos["Recinto 5"]["espaço livre"]) {
                    recintos["Recinto 5"]["espaço livre"] = recintos["Recinto 5"]["espaço livre"] - quantidade * LEOPARDO_VALUE
                    const livre = recintos["Recinto 5"]["espaço livre"]
                    const total = recintos["Recinto 5"]["espaço total"]
                    
                    resposta3 = `Recinto 5 (espaço livre: ${livre} total: ${total})`
                }
            }

            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 1"].animais.includes(LEOPARDO)) {
                    recintos["Recinto 1"].animais.push(LEOPARDO)
                }

            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 3"].animais.includes(LEOPARDO)) {
                    recintos["Recinto 3"].animais.push(LEOPARDO)
                }
            }
            if (resposta3) {
                resultado.push(resposta3)
                if(!recintos["Recinto 5"].animais.includes(LEOPARDO)) {
                    recintos["Recinto 5"].animais.push(LEOPARDO)
                }
            }

            if (resposta1 || resposta2 || resposta3) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        // Caso do Leopardo, só pode ter ele (regra 2) e tem que ser em rio
        if (animal.toUpperCase() == CROCODILO) {
            let resposta1 = ""
            let resposta2 = ""
            if(!(recintos["Recinto 3"].animais.includes(LEAO) || recintos["Recinto 3"].animais.includes(LEOPARDO)
                || recintos["Recinto 3"].animais.includes(MACACO) || recintos["Recinto 3"].animais.includes(GAZELA) 
                || recintos["Recinto 3"].animais.includes(HIPOPOTAMO))) {

                if (quantidade * CROCODILO_VALUE <= recintos["Recinto 3"]["espaço livre"]) {
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * CROCODILO_VALUE
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]
                    
                    resposta1 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                }
            }

            if (quantidade * CROCODILO_VALUE <= recintos["Recinto 4"]["espaço livre"]) {
                if(!recintos["Recinto 4"].animais.includes(HIPOPOTAMO)) {
                    recintos["Recinto 4"]["espaço livre"] = recintos["Recinto 4"]["espaço livre"] - quantidade * CROCODILO_VALUE
                    const livre = recintos["Recinto 4"]["espaço livre"]
                    const total = recintos["Recinto 4"]["espaço total"]

                    resposta2 = `Recinto 4 (espaço livre: ${livre} total: ${total})`
            }
            }
            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 3"].animais.includes(CROCODILO)) {
                    recintos["Recinto 3"].animais.push(CROCODILO)
                }

            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 4"].animais.includes(CROCODILO)) {
                    recintos["Recinto 4"].animais.push(CROCODILO)
                }
            }

            if (resposta1 || resposta2) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        // Caso do Macaco
        if (animal.toUpperCase() == MACACO) {
            let resposta1 = ""
            let resposta2 = ""
            let resposta3 = ""
            let resposta4 = ""
            let animalDiferente = 0

            if(!(recintos["Recinto 1"].animais.includes(LEAO) || recintos["Recinto 1"].animais.includes(LEOPARDO))) {
                if (recintos["Recinto 1"].animais.includes(GAZELA) ) {
                    animalDiferente = 1
                }
                if (quantidade * MACACO_VALUE <= recintos["Recinto 1"]["espaço livre"]) {
                    recintos["Recinto 1"]["espaço livre"] = recintos["Recinto 1"]["espaço livre"] - quantidade * MACACO_VALUE - animalDiferente
                    const livre = recintos["Recinto 1"]["espaço livre"]
                    const total = recintos["Recinto 1"]["espaço total"]

                    if (total - livre > 1 || quantidade > 1) {
                        resposta1 = `Recinto 1 (espaço livre: ${livre} total: ${total})`
                    }
                }
            }

            if (quantidade * MACACO_VALUE <= recintos["Recinto 2"]["espaço livre"] && quantidade > 1) {
                recintos["Recinto 2"]["espaço livre"] = recintos["Recinto 2"]["espaço livre"] - quantidade * MACACO_VALUE
                const livre = recintos["Recinto 2"]["espaço livre"]
                const total = recintos["Recinto 2"]["espaço total"]

                if (total - livre > 1 || quantidade > 1) {
                    resposta2 = `Recinto 2 (espaço livre: ${livre} total: ${total})`
                }
            }

            if(!(recintos["Recinto 3"].animais.includes(LEAO) || recintos["Recinto 3"].animais.includes(LEOPARDO) 
            || recintos["Recinto 3"].animais.includes(CROCODILO))) {
                if (recintos["Recinto 3"].animais.includes(GAZELA) || recintos["Recinto 3"].animais.includes(HIPOPOTAMO)) {
                    animalDiferente = 1
                }
                if (quantidade * MACACO_VALUE <= recintos["Recinto 3"]["espaço livre"] - animalDiferente) {
                    
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * MACACO_VALUE - animalDiferente
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]

                    if (total - livre > 1 || quantidade > 1) {
                        resposta3 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                    }
                }
            }

            if(!(recintos["Recinto 5"].animais.includes(LEAO) || recintos["Recinto 5"].animais.includes(LEOPARDO))) {

                animalDiferente = 0
                if (recintos["Recinto 5"].animais.includes(GAZELA)) {
                    animalDiferente = 1
                }
                if (quantidade * MACACO_VALUE <= recintos["Recinto 5"]["espaço livre"] - animalDiferente) {

                    recintos["Recinto 5"]["espaço livre"] = recintos["Recinto 5"]["espaço livre"] - quantidade * MACACO_VALUE - animalDiferente
                    const livre = recintos["Recinto 5"]["espaço livre"]
                    const total = recintos["Recinto 5"]["espaço total"]

                    if (total - livre > 1 || quantidade > 1) {
                        resposta4 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                    }
                }
            }

            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 1"].animais.includes(MACACO)) {
                    recintos["Recinto 1"].animais.push(MACACO)
                }
            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 2"].animais.includes(MACACO)) {
                    recintos["Recinto 2"].animais.push(MACACO)
                }
            }
            if (resposta3) {
                resultado.push(resposta3)
                if(!recintos["Recinto 3"].animais.includes(MACACO)) {
                    recintos["Recinto 3"].animais.push(MACACO)
                }
            }
            if (resposta4) {
                resultado.push(resposta4)
                if(!recintos["Recinto 5"].animais.includes(MACACO)) {
                    recintos["Recinto 5"].animais.push(MACACO)
                }
            }
            if (resposta1 || resposta2 || resposta3 || resposta4) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        // Caso da Gazela
        if (animal.toUpperCase() == GAZELA) {
            let resposta1 = ""
            let resposta2 = ""
            let resposta3 = ""

            let animalDiferente = 0

            if(!(recintos["Recinto 1"].animais.includes(LEAO) || recintos["Recinto 1"].animais.includes(LEOPARDO))) {

                if (recintos["Recinto 1"].animais.includes(MACACO)) {
                    animalDiferente = 1
                }
                if (quantidade * GAZELA_VALUE <= recintos["Recinto 1"]["espaço livre"] - animalDiferente) {
                    recintos["Recinto 1"]["espaço livre"] = recintos["Recinto 1"]["espaço livre"] - quantidade * GAZELA_VALUE - animalDiferente
                    const livre = recintos["Recinto 1"]["espaço livre"]
                    const total = recintos["Recinto 1"]["espaço total"]
                    resposta1 = `Recinto 1 (espaço livre: ${livre} total: ${total})`
                }
            }
            if(!(recintos["Recinto 3"].animais.includes(LEAO) || recintos["Recinto 3"].animais.includes(LEOPARDO)
            || recintos["Recinto 3"].animais.includes(CROCODILO))) {

                animalDiferente = 0
                if (recintos["Recinto 3"].animais.includes(MACACO) || recintos["Recinto 3"].animais.includes(HIPOPOTAMO)) {
                    animalDiferente = 1
                }
                if (quantidade * GAZELA_VALUE <= recintos["Recinto 3"]["espaço livre"] - animalDiferente) {
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * GAZELA_VALUE - animalDiferente
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]
                    resposta2 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                }
            }
            if(!(recintos["Recinto 5"].animais.includes(LEAO) || recintos["Recinto 5"].animais.includes(LEOPARDO))) {

                animalDiferente = 0
                if (recintos["Recinto 5"].animais.includes(MACACO)) {
                    animalDiferente = 1
                }
                if (quantidade * GAZELA_VALUE <= recintos["Recinto 3"]["espaço livre"] - animalDiferente) {
                    recintos["Recinto 5"]["espaço livre"] = recintos["Recinto 5"]["espaço livre"] - quantidade * GAZELA_VALUE - animalDiferente
                    const livre = recintos["Recinto 5"]["espaço livre"]
                    const total = recintos["Recinto 5"]["espaço total"]
                    resposta2 = `Recinto 5 (espaço livre: ${livre} total: ${total})`
                }
            }

            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 1"].animais.includes(GAZELA)) {
                    recintos["Recinto 1"].animais.push(GAZELA)
                }
            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 3"].animais.includes(GAZELA)) {
                    recintos["Recinto 3"].animais.push(GAZELA)
                }
            }
            if (resposta3) {
                resultado.push(resposta3)
                if(!recintos["Recinto 5"].animais.includes(GAZELA)) {
                    recintos["Recinto 5"].animais.push(GAZELA)
                }
            }

            if (resposta1 || resposta2 || resposta3) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        // Caso do Hipopótamo
        if (animal.toUpperCase() == HIPOPOTAMO) {
            let resposta1 = ""
            let resposta2 = ""
            let animalDiferente = 0

            if (recintos["Recinto 3"].animais.includes(GAZELA) || recintos["Recinto 3"].animais.includes(MACACO)) {
                animalDiferente = 1
            }
            if (!recintos["Recinto 3"].animais.includes(CROCODILO)) {
                if (quantidade * HIPOPOTAMO_VALUE <= recintos["Recinto 3"]["espaço livre"] - animalDiferente) {
                    recintos["Recinto 3"]["espaço livre"] = recintos["Recinto 3"]["espaço livre"] - quantidade * HIPOPOTAMO_VALUE - animalDiferente
                    const livre = recintos["Recinto 3"]["espaço livre"]
                    const total = recintos["Recinto 3"]["espaço total"]
                    resposta1 = `Recinto 3 (espaço livre: ${livre} total: ${total})`
                }
            }

            if (quantidade * HIPOPOTAMO_VALUE <= recintos["Recinto 4"]["espaço livre"]) {
                if (!recintos["Recinto 4"].animais.includes(CROCODILO)) {
                    recintos["Recinto 4"]["espaço livre"] = recintos["Recinto 4"]["espaço livre"] - quantidade * HIPOPOTAMO_VALUE
                    const livre = recintos["Recinto 4"]["espaço livre"]
                    const total = recintos["Recinto 4"]["espaço total"]
                    resposta2 = `Recinto 4 (espaço livre: ${livre} total: ${total})`
                    
                }
            }

            let resultado = []
            if (resposta1) {
                resultado.push(resposta1)
                if(!recintos["Recinto 3"].animais.includes(HIPOPOTAMO)) {
                    recintos["Recinto 3"].animais.push(HIPOPOTAMO)
                }
            }
            if (resposta2) {
                resultado.push(resposta2)
                if(!recintos["Recinto 4"].animais.includes(HIPOPOTAMO)) {
                    recintos["Recinto 4"].animais.push(HIPOPOTAMO)
                }
            }

            if (resposta1 || resposta2) {
                return {
                    recintosViaveis: resultado
                }
            }
        }

        return {
            erro: "Não há recinto viável"
          }
    }
}

export { RecintosZoo as RecintosZoo };
