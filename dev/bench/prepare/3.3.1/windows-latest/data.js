window.BENCHMARK_DATA = {
  "lastUpdate": 1694089577930,
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
          "id": "a90abe468b8dc3ffed34515797885dedcb4e0723",
          "message": "Prepare 3.3.1",
          "timestamp": "2023-09-07T21:02:34+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/greymistcube/libplanet/commit/a90abe468b8dc3ffed34515797885dedcb4e0723"
        },
        "date": 1694089552088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427620,
            "unit": "ns",
            "range": "± 128088.19877985117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594118.75,
            "unit": "ns",
            "range": "± 80671.28616360546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1777716.1616161617,
            "unit": "ns",
            "range": "± 126880.99012265085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4727684.042553191,
            "unit": "ns",
            "range": "± 268846.82543982816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57489.69072164949,
            "unit": "ns",
            "range": "± 5208.716343305439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148653.333333333,
            "unit": "ns",
            "range": "± 133520.51670418438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21807840,
            "unit": "ns",
            "range": "± 186958.0732219316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54055100,
            "unit": "ns",
            "range": "± 687695.8204239513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106789421.42857143,
            "unit": "ns",
            "range": "± 602227.2522492222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215886578.57142857,
            "unit": "ns",
            "range": "± 1611494.0360893828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4713534.270833333,
            "unit": "ns",
            "range": "± 26391.743685695303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1455955.8872767857,
            "unit": "ns",
            "range": "± 6859.4620742127745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1071070.0570913462,
            "unit": "ns",
            "range": "± 3666.281497016347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647539.092548077,
            "unit": "ns",
            "range": "± 12304.495827150426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875858.2824707031,
            "unit": "ns",
            "range": "± 16692.522008163265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806418.0114746094,
            "unit": "ns",
            "range": "± 14919.85746566866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3532370.9677419355,
            "unit": "ns",
            "range": "± 87181.757241403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3792784.6153846155,
            "unit": "ns",
            "range": "± 100953.3107621843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4506821.052631579,
            "unit": "ns",
            "range": "± 96879.0114808005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4045014.6341463416,
            "unit": "ns",
            "range": "± 145549.07344427792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6235632.432432433,
            "unit": "ns",
            "range": "± 206123.43261859988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275948.3333333333,
            "unit": "ns",
            "range": "± 11583.71872707649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262807.31707317074,
            "unit": "ns",
            "range": "± 8142.738797355053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247177.77777777778,
            "unit": "ns",
            "range": "± 10395.838548164205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268606.666666667,
            "unit": "ns",
            "range": "± 47965.29201511483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934433.3333333335,
            "unit": "ns",
            "range": "± 47753.05026408061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25218.478260869564,
            "unit": "ns",
            "range": "± 1734.7089788435576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101705.10204081633,
            "unit": "ns",
            "range": "± 7057.749596785339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88276.5306122449,
            "unit": "ns",
            "range": "± 8039.090078022411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101137.75510204081,
            "unit": "ns",
            "range": "± 15747.174613578803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7542.708333333333,
            "unit": "ns",
            "range": "± 1155.83142020358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25930.76923076923,
            "unit": "ns",
            "range": "± 1922.7695480849325"
          }
        ]
      }
    ]
  }
}