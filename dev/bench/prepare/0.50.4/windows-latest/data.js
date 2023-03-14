window.BENCHMARK_DATA = {
  "lastUpdate": 1678787272439,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "25a63e7c6d355a1608e24904be5b0c639cd3d757",
          "message": "Prepare 0.50.4",
          "timestamp": "2023-03-14T18:27:26+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/greymistcube/libplanet/commit/25a63e7c6d355a1608e24904be5b0c639cd3d757"
        },
        "date": 1678787247118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 151651.64835164836,
            "unit": "ns",
            "range": "± 13983.326282376947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6612464.666193182,
            "unit": "ns",
            "range": "± 160717.58094509316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075144.3080357143,
            "unit": "ns",
            "range": "± 35809.9479259313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1541021.97265625,
            "unit": "ns",
            "range": "± 17709.464756894722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3509687.34375,
            "unit": "ns",
            "range": "± 64366.37554966351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1120011.9600183824,
            "unit": "ns",
            "range": "± 22443.559453047477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1053390.2901785714,
            "unit": "ns",
            "range": "± 16787.458084018035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6642662.876157408,
            "unit": "ns",
            "range": "± 347564.1353527708"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7413095.161290322,
            "unit": "ns",
            "range": "± 569910.6706348867"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36750119.31818182,
            "unit": "ns",
            "range": "± 2010824.3579085048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8258480.21978022,
            "unit": "ns",
            "range": "± 622265.833372019"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40471261.9047619,
            "unit": "ns",
            "range": "± 1845580.2041135104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132235.48387096773,
            "unit": "ns",
            "range": "± 27182.02189252113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243626.08695652173,
            "unit": "ns",
            "range": "± 24580.253709673456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244197.8260869565,
            "unit": "ns",
            "range": "± 33506.67303805784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5011351.19047619,
            "unit": "ns",
            "range": "± 268166.0663752821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12863174,
            "unit": "ns",
            "range": "± 517260.576108327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28726.530612244896,
            "unit": "ns",
            "range": "± 9511.019664355355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63038.04347826087,
            "unit": "ns",
            "range": "± 12842.732946555823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69269.23076923077,
            "unit": "ns",
            "range": "± 13931.361043086226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 159266.66666666666,
            "unit": "ns",
            "range": "± 32670.945298026916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10369.101123595505,
            "unit": "ns",
            "range": "± 1102.6699420141324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22188.505747126437,
            "unit": "ns",
            "range": "± 3471.693685158764"
          }
        ]
      }
    ]
  }
}