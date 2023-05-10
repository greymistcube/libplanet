window.BENCHMARK_DATA = {
  "lastUpdate": 1683720253209,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720238951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7358771.428571428,
            "unit": "ns",
            "range": "± 91892.11712275542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19111185.219512194,
            "unit": "ns",
            "range": "± 678700.3031265166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46967683,
            "unit": "ns",
            "range": "± 1003004.4845603222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91680695.875,
            "unit": "ns",
            "range": "± 1700777.2747791866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189399969.73333332,
            "unit": "ns",
            "range": "± 2376144.5827745073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53288.166666666664,
            "unit": "ns",
            "range": "± 5029.859880780961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295362.7807017544,
            "unit": "ns",
            "range": "± 11957.27788054859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286223.4054054054,
            "unit": "ns",
            "range": "± 14232.84908753211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259343.60447761195,
            "unit": "ns",
            "range": "± 11962.133082475653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4016119.3076923075,
            "unit": "ns",
            "range": "± 47748.04130430311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3708796.3076923075,
            "unit": "ns",
            "range": "± 57317.53402811484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16008.875,
            "unit": "ns",
            "range": "± 2058.2744911082987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80289.21505376344,
            "unit": "ns",
            "range": "± 6598.142734149188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76617.53333333334,
            "unit": "ns",
            "range": "± 6332.541734049855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91355.1105263158,
            "unit": "ns",
            "range": "± 12183.487271359436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4624.247058823529,
            "unit": "ns",
            "range": "± 622.0307737350214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15139.976744186046,
            "unit": "ns",
            "range": "± 1398.657160419944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493398.914893617,
            "unit": "ns",
            "range": "± 165347.70373352533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773010.2125,
            "unit": "ns",
            "range": "± 143882.0471540239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2370647.094736842,
            "unit": "ns",
            "range": "± 190958.05132580956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6329587.103092783,
            "unit": "ns",
            "range": "± 424939.44140536775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073733.1739130435,
            "unit": "ns",
            "range": "± 114127.92035222861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3309776.9215686275,
            "unit": "ns",
            "range": "± 134656.3303642043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4184417.7280701753,
            "unit": "ns",
            "range": "± 175730.11353046237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066432.769230769,
            "unit": "ns",
            "range": "± 185771.07312679302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7138697.2727272725,
            "unit": "ns",
            "range": "± 276557.95789881906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6171049.785416666,
            "unit": "ns",
            "range": "± 72459.11764581231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844410.2003348214,
            "unit": "ns",
            "range": "± 7818.012240685908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234894.129296875,
            "unit": "ns",
            "range": "± 7542.881700118336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2385662.0943509615,
            "unit": "ns",
            "range": "± 12419.704261265899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755700.3277994791,
            "unit": "ns",
            "range": "± 5863.078474320382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759236.3543619792,
            "unit": "ns",
            "range": "± 6574.068484606108"
          }
        ]
      }
    ]
  }
}