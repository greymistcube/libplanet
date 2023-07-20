window.BENCHMARK_DATA = {
  "lastUpdate": 1689839784487,
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
          "id": "44bbbc01223ed47ee09dd0d2667ecd9c5166367d",
          "message": "Hide TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-20T16:39:16+09:00",
          "tree_id": "77f12de69d9e969b1c90fff7a2b3bfb978853b6c",
          "url": "https://github.com/greymistcube/libplanet/commit/44bbbc01223ed47ee09dd0d2667ecd9c5166367d"
        },
        "date": 1689839775874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331132.3469387755,
            "unit": "ns",
            "range": "± 21856.982998010037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320177.1979166667,
            "unit": "ns",
            "range": "± 20460.121652990085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290798.68,
            "unit": "ns",
            "range": "± 21639.918057911666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5363535.342105263,
            "unit": "ns",
            "range": "± 117718.23994760783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4859241.666666667,
            "unit": "ns",
            "range": "± 168935.26208040593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25492.989130434784,
            "unit": "ns",
            "range": "± 1964.4945467107764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111849.76842105263,
            "unit": "ns",
            "range": "± 8563.203730922793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98137.91578947369,
            "unit": "ns",
            "range": "± 7356.450341783803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122968.5306122449,
            "unit": "ns",
            "range": "± 14654.339421498893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7339.628865979382,
            "unit": "ns",
            "range": "± 818.7600294498639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24459.695652173912,
            "unit": "ns",
            "range": "± 1904.5060836967762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778374.1578947369,
            "unit": "ns",
            "range": "± 116040.14648720792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3385907.52,
            "unit": "ns",
            "range": "± 224646.57421032255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2281019.969072165,
            "unit": "ns",
            "range": "± 155900.08230577348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6402587.91,
            "unit": "ns",
            "range": "± 375749.7805920203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7108131.571354167,
            "unit": "ns",
            "range": "± 94737.30572480752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2244767.39140625,
            "unit": "ns",
            "range": "± 41724.637194343915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1618290.1184895833,
            "unit": "ns",
            "range": "± 16052.829642586023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3046252.7306743423,
            "unit": "ns",
            "range": "± 64959.91573790251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976110.42421875,
            "unit": "ns",
            "range": "± 13622.33631966698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903912.5177734375,
            "unit": "ns",
            "range": "± 11135.292496245753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4186261.46875,
            "unit": "ns",
            "range": "± 129957.11778344285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4279482.319148936,
            "unit": "ns",
            "range": "± 243490.9424737104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5532952.315789473,
            "unit": "ns",
            "range": "± 188985.35102919306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4896159.2,
            "unit": "ns",
            "range": "± 101445.50720232434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7930362.481012658,
            "unit": "ns",
            "range": "± 400350.622847692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10456298.027777778,
            "unit": "ns",
            "range": "± 515302.88203390624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26471450.736842107,
            "unit": "ns",
            "range": "± 576811.5228640636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66819395.93333333,
            "unit": "ns",
            "range": "± 1095461.842853341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137158733.92857143,
            "unit": "ns",
            "range": "± 1197312.5023177445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262853877,
            "unit": "ns",
            "range": "± 7321566.869285569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56183.86956521739,
            "unit": "ns",
            "range": "± 3508.445428314249"
          }
        ]
      }
    ]
  }
}