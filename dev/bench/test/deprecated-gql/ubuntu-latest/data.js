window.BENCHMARK_DATA = {
  "lastUpdate": 1689920686233,
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
      },
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
          "id": "0600ee8da3e10627bf0993019e0cc19126ed1725",
          "message": "Remove TxResult.FungibleAssetsDelta",
          "timestamp": "2023-07-21T15:11:54+09:00",
          "tree_id": "99cb96caede6dd63ee469ff38aeb29778f33a921",
          "url": "https://github.com/greymistcube/libplanet/commit/0600ee8da3e10627bf0993019e0cc19126ed1725"
        },
        "date": 1689920678519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286820.8857142857,
            "unit": "ns",
            "range": "± 9420.769407105172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271790.9090909091,
            "unit": "ns",
            "range": "± 8714.606134770238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244264.14285714287,
            "unit": "ns",
            "range": "± 7888.434002284824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301056.714285715,
            "unit": "ns",
            "range": "± 25043.741952611854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832666.153846154,
            "unit": "ns",
            "range": "± 21105.556538686495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20637.505376344085,
            "unit": "ns",
            "range": "± 1635.2927980324705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91314.75384615385,
            "unit": "ns",
            "range": "± 4250.790904462549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74584.82352941176,
            "unit": "ns",
            "range": "± 2377.7273650399648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93257.52040816327,
            "unit": "ns",
            "range": "± 10885.670719576407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5110.183673469388,
            "unit": "ns",
            "range": "± 540.1988817978474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18874.83695652174,
            "unit": "ns",
            "range": "± 1481.5123048386868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422439.8229166667,
            "unit": "ns",
            "range": "± 103192.81281419337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686913.3720930233,
            "unit": "ns",
            "range": "± 95710.69922876047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1830911.0957446808,
            "unit": "ns",
            "range": "± 111120.94301914403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4828399.310344827,
            "unit": "ns",
            "range": "± 121326.3752802755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6115582.117838542,
            "unit": "ns",
            "range": "± 7098.44613449211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2010341.0510416667,
            "unit": "ns",
            "range": "± 2429.336101935942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355350.4990885416,
            "unit": "ns",
            "range": "± 460.8404734394033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594578.5011160714,
            "unit": "ns",
            "range": "± 1961.5134946809942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816309.5149972098,
            "unit": "ns",
            "range": "± 456.48490275192734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728257.9672154018,
            "unit": "ns",
            "range": "± 495.7924044691395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328111.730769231,
            "unit": "ns",
            "range": "± 61235.227458421476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516819.3571428573,
            "unit": "ns",
            "range": "± 44087.98535901231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4355056.428571428,
            "unit": "ns",
            "range": "± 55700.36903028462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3845751.88372093,
            "unit": "ns",
            "range": "± 114646.12808825694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6271270.333333333,
            "unit": "ns",
            "range": "± 96747.46867981808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7793800.230769231,
            "unit": "ns",
            "range": "± 26589.62387271222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19712037.866666667,
            "unit": "ns",
            "range": "± 72692.82228554685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50307374.266666666,
            "unit": "ns",
            "range": "± 220544.39256254272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100672053.92307693,
            "unit": "ns",
            "range": "± 345830.3622026898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201896359.92857143,
            "unit": "ns",
            "range": "± 600558.1136684397"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48573.786516853936,
            "unit": "ns",
            "range": "± 2694.614319138649"
          }
        ]
      }
    ]
  }
}