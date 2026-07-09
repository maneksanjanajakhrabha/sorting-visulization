let arr = [70, 30, 90, 50, 20, 80, 40];

showBars();

function showBars() {
    let graph = document.getElementById("graph");
    graph.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");

        bar.className = "bar";
        bar.style.height = arr[i] * 3 + "px";
        bar.innerHTML = arr[i];

        graph.appendChild(bar);
    }
}

async function startSort() {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            await wait(200);

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                showBars();

                await wait(50);
            }
        }
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetGraph() {
    arr = [70, 30, 90, 50, 20, 80, 40];
    showBars();
}