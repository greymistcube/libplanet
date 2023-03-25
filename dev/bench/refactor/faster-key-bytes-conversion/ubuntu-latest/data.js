window.BENCHMARK_DATA = {
  "lastUpdate": 1679709033364,
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
          "id": "bf8224e710511a3fa9bd6c938e3722c71b63d103",
          "message": "Improved KeyConverters performance",
          "timestamp": "2023-03-25T10:37:43+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/greymistcube/libplanet/commit/bf8224e710511a3fa9bd6c938e3722c71b63d103"
        },
        "date": 1679709026654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108954.76,
            "unit": "ns",
            "range": "± 5469.24110512107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5004170.54140625,
            "unit": "ns",
            "range": "± 41247.102526924726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6237309.133333334,
            "unit": "ns",
            "range": "± 91046.97192569391"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28016707.533333335,
            "unit": "ns",
            "range": "± 496186.3190171995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7085950.882352941,
            "unit": "ns",
            "range": "± 145508.72974064236"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31403081.9375,
            "unit": "ns",
            "range": "± 588370.3966481736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056509.255022322,
            "unit": "ns",
            "range": "± 20057.420128267848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867027.350811298,
            "unit": "ns",
            "range": "± 2943.4866826924376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351534.5149739583,
            "unit": "ns",
            "range": "± 3038.059686325373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635622.9171875,
            "unit": "ns",
            "range": "± 1903.08780652138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819678.4584263393,
            "unit": "ns",
            "range": "± 837.0305344691451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758300.1708233173,
            "unit": "ns",
            "range": "± 372.06448275607653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103087.78350515464,
            "unit": "ns",
            "range": "± 9651.628572883012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206329.90322580645,
            "unit": "ns",
            "range": "± 9347.25273693753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190920.95945945947,
            "unit": "ns",
            "range": "± 9523.829026557598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3949287.7333333334,
            "unit": "ns",
            "range": "± 57567.68731981841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9969450.2,
            "unit": "ns",
            "range": "± 117934.51315224539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20298.08695652174,
            "unit": "ns",
            "range": "± 2398.6829886976643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53060.50588235294,
            "unit": "ns",
            "range": "± 3169.12165472785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42053.64705882353,
            "unit": "ns",
            "range": "± 1968.2257467046863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99940.77659574468,
            "unit": "ns",
            "range": "± 13619.121643755274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5959.224489795918,
            "unit": "ns",
            "range": "± 658.5900674318132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19164.733333333334,
            "unit": "ns",
            "range": "± 1518.6980290270965"
          }
        ]
      }
    ]
  }
}