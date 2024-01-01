window.BENCHMARK_DATA = {
  "lastUpdate": 1704137103987,
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137087772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7588936.692307692,
            "unit": "ns",
            "range": "± 77350.15744800246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18447111.285714287,
            "unit": "ns",
            "range": "± 264870.46569986985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47308718.09090909,
            "unit": "ns",
            "range": "± 877495.4129169977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90134921.66666667,
            "unit": "ns",
            "range": "± 829671.7609615079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191992464.41666666,
            "unit": "ns",
            "range": "± 4863238.401520802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38469.6914893617,
            "unit": "ns",
            "range": "± 8446.826644732528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220153.45833333334,
            "unit": "ns",
            "range": "± 15636.603014396209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218527.1505376344,
            "unit": "ns",
            "range": "± 16394.407176618013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213277.04255319148,
            "unit": "ns",
            "range": "± 13151.997992590117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3784276,
            "unit": "ns",
            "range": "± 94979.00922377763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425731.285714286,
            "unit": "ns",
            "range": "± 47187.37535764049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13958.626373626374,
            "unit": "ns",
            "range": "± 2061.953473170267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62492.35106382979,
            "unit": "ns",
            "range": "± 10258.060325891174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53166.64634146341,
            "unit": "ns",
            "range": "± 3638.8459509661843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65457.95918367347,
            "unit": "ns",
            "range": "± 15176.063303781342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3750.257894736842,
            "unit": "ns",
            "range": "± 898.8205358441112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12804.945652173914,
            "unit": "ns",
            "range": "± 1465.6843457612079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042107.0102040817,
            "unit": "ns",
            "range": "± 92639.66479811502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2193570.8068181816,
            "unit": "ns",
            "range": "± 120165.12379909534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1468461.4175257732,
            "unit": "ns",
            "range": "± 109997.93232930468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806142.142857143,
            "unit": "ns",
            "range": "± 327421.9605945858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2960442.076923077,
            "unit": "ns",
            "range": "± 23549.35824129658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3073892.03125,
            "unit": "ns",
            "range": "± 94087.15032951112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5961998.606382979,
            "unit": "ns",
            "range": "± 3637963.822407489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3825111.8255813955,
            "unit": "ns",
            "range": "± 357734.3663538284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14767566.361702127,
            "unit": "ns",
            "range": "± 1693275.7238075223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4294702.673177083,
            "unit": "ns",
            "range": "± 56190.221417178764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1351918.282421875,
            "unit": "ns",
            "range": "± 10931.509719367497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 875458.6250651042,
            "unit": "ns",
            "range": "± 6553.158294825995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951859.6671875,
            "unit": "ns",
            "range": "± 30463.86328795098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634193.1753255208,
            "unit": "ns",
            "range": "± 5505.903215614679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580666.8664899553,
            "unit": "ns",
            "range": "± 2288.3190623016353"
          }
        ]
      }
    ]
  }
}