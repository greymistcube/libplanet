window.BENCHMARK_DATA = {
  "lastUpdate": 1687233298236,
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
          "id": "7ab8839a22265afd7efcd957840a5738b5c60503",
          "message": "Reorganize tests",
          "timestamp": "2023-06-20T11:34:58+09:00",
          "tree_id": "81260a7a807266e524111433ca408a398f66a401",
          "url": "https://github.com/greymistcube/libplanet/commit/7ab8839a22265afd7efcd957840a5738b5c60503"
        },
        "date": 1687233281356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9160061.275510205,
            "unit": "ns",
            "range": "± 673173.1367494727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21666478.791666668,
            "unit": "ns",
            "range": "± 1300382.646146465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53668814.166666664,
            "unit": "ns",
            "range": "± 1871640.088339261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107494134.1388889,
            "unit": "ns",
            "range": "± 3399433.539958127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217138812.44827586,
            "unit": "ns",
            "range": "± 8380660.851613189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82682.89325842696,
            "unit": "ns",
            "range": "± 14832.03056856249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362973.7111111111,
            "unit": "ns",
            "range": "± 51519.58179385153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344420.27173913043,
            "unit": "ns",
            "range": "± 41474.85389653029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325319.988372093,
            "unit": "ns",
            "range": "± 28304.88811557391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4706482.569767442,
            "unit": "ns",
            "range": "± 723323.2355383489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028162.1781609193,
            "unit": "ns",
            "range": "± 368669.25405882514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20693.875,
            "unit": "ns",
            "range": "± 4816.190307592441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109177.55555555556,
            "unit": "ns",
            "range": "± 21574.713955743653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113224.93478260869,
            "unit": "ns",
            "range": "± 13337.649530397022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129994.71978021978,
            "unit": "ns",
            "range": "± 19460.93717099416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9259.945652173914,
            "unit": "ns",
            "range": "± 1187.9262507553387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22244.989247311827,
            "unit": "ns",
            "range": "± 5925.658267404309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2012034.1063829786,
            "unit": "ns",
            "range": "± 333277.67210831895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3524726.942528736,
            "unit": "ns",
            "range": "± 438870.20453844086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2417990.059139785,
            "unit": "ns",
            "range": "± 315576.4088805512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6798513.369047619,
            "unit": "ns",
            "range": "± 893711.063379712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292232.706896552,
            "unit": "ns",
            "range": "± 93796.39073637083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571360.474747475,
            "unit": "ns",
            "range": "± 246293.41279177417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4710856.117021277,
            "unit": "ns",
            "range": "± 319128.44200564217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066891.327586207,
            "unit": "ns",
            "range": "± 382443.10137786047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9318571.795454545,
            "unit": "ns",
            "range": "± 2909584.7868638006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7353529.962296195,
            "unit": "ns",
            "range": "± 181400.26708948592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2074866.644810268,
            "unit": "ns",
            "range": "± 33942.47721002803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368993.9404296875,
            "unit": "ns",
            "range": "± 26296.345702873394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632115.4602481616,
            "unit": "ns",
            "range": "± 49179.301830188735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918467.3502197266,
            "unit": "ns",
            "range": "± 16800.647324024347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968148.1039104055,
            "unit": "ns",
            "range": "± 63630.85400627097"
          }
        ]
      }
    ]
  }
}