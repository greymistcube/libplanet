window.BENCHMARK_DATA = {
  "lastUpdate": 1689127254355,
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
          "id": "ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597",
          "message": "Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T10:24:37+09:00",
          "tree_id": "56adda268a6b85b4d29c5baba373e3dd0e7fa0fc",
          "url": "https://github.com/greymistcube/libplanet/commit/ecdebfb7e8cfbf78e974a5a9ae926cb8fe5ec597"
        },
        "date": 1689127236741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7893687.023809524,
            "unit": "ns",
            "range": "± 287314.0300016341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19272123.36,
            "unit": "ns",
            "range": "± 513024.66914888547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47089665.21052632,
            "unit": "ns",
            "range": "± 1624413.3209086661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95767497.94285715,
            "unit": "ns",
            "range": "± 3097014.548909414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196514113.16666666,
            "unit": "ns",
            "range": "± 5873487.288275269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63279.989583333336,
            "unit": "ns",
            "range": "± 9071.142419197487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325737.3350515464,
            "unit": "ns",
            "range": "± 22669.538504198583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310632.5131578947,
            "unit": "ns",
            "range": "± 15732.387677648445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314216.84523809527,
            "unit": "ns",
            "range": "± 16729.002549496523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184314.8,
            "unit": "ns",
            "range": "± 67622.3217237791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002868.6428571427,
            "unit": "ns",
            "range": "± 56203.984001762095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22008.836734693876,
            "unit": "ns",
            "range": "± 3924.565268967918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108386.74242424243,
            "unit": "ns",
            "range": "± 19221.38656314935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103645.47422680413,
            "unit": "ns",
            "range": "± 15478.871743775973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112002.95652173914,
            "unit": "ns",
            "range": "± 15851.555498888825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7525,
            "unit": "ns",
            "range": "± 829.9736332913009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18923.840425531915,
            "unit": "ns",
            "range": "± 3307.6073355357853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479865.9263157896,
            "unit": "ns",
            "range": "± 145635.77425939278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2757836.5694444445,
            "unit": "ns",
            "range": "± 135843.22800979763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2014253.1739130435,
            "unit": "ns",
            "range": "± 164853.26386717893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5663287.803571428,
            "unit": "ns",
            "range": "± 242786.67543065417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3221444.4545454546,
            "unit": "ns",
            "range": "± 101699.50379060696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333595.484375,
            "unit": "ns",
            "range": "± 154384.9656769183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4304890.666666667,
            "unit": "ns",
            "range": "± 163538.1676341531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933467.8,
            "unit": "ns",
            "range": "± 72020.91266054008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7049385.625,
            "unit": "ns",
            "range": "± 138095.82009164264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6765076.916903409,
            "unit": "ns",
            "range": "± 253221.0472261747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984393.9408482143,
            "unit": "ns",
            "range": "± 16363.159562643315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258448.0848958334,
            "unit": "ns",
            "range": "± 21183.151510875028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3083579.394791667,
            "unit": "ns",
            "range": "± 56615.87311292187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865897.1557291667,
            "unit": "ns",
            "range": "± 1992.3722793197244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809365.4794270833,
            "unit": "ns",
            "range": "± 1835.419080884062"
          }
        ]
      }
    ]
  }
}