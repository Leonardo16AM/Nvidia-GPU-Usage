const vscode = require('vscode');
const { exec } = require('child_process');

let statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

function updateGpuUsageAndMemory() {
  exec('nvidia-smi --query-gpu=utilization.gpu,memory.used --format=csv,noheader,nounits', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    let [gpuUsage, memoryUsedInMiB] = stdout.trim().split(', ');
    let memoryUsedInGB = parseFloat(memoryUsedInMiB) / 1024;

    statusBar.text = `GPU: ${gpuUsage}%, ${memoryUsedInGB.toFixed(2)} GB`;
    statusBar.show();
  });
}

function activate(context) {
  context.subscriptions.push(statusBar);
  updateGpuUsageAndMemory();
  setInterval(updateGpuUsageAndMemory, 2000); 
}

exports.activate = activate;
