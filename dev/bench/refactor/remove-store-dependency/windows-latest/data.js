window.BENCHMARK_DATA = {
  "lastUpdate": 1696393205528,
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
          "id": "250e4a8e03fcdb06cb573e4e3b48f0e1adec3685",
          "message": "Changed Evaluate to require base state root hash",
          "timestamp": "2023-10-04T12:55:22+09:00",
          "tree_id": "5cc7f9988adcf7a5928fa466c2a438ae65723157",
          "url": "https://github.com/greymistcube/libplanet/commit/250e4a8e03fcdb06cb573e4e3b48f0e1adec3685"
        },
        "date": 1696392918653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583389.1304347827,
            "unit": "ns",
            "range": "± 109005.99585940894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060555.263157895,
            "unit": "ns",
            "range": "± 142719.86350398633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2393823.711340206,
            "unit": "ns",
            "range": "± 181621.75655121592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10628060.227272727,
            "unit": "ns",
            "range": "± 770657.254949854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61808.69565217391,
            "unit": "ns",
            "range": "± 4788.864192896147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9402873.684210526,
            "unit": "ns",
            "range": "± 192646.79782817644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25875773.880597014,
            "unit": "ns",
            "range": "± 1200505.0750324433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65379919.35483871,
            "unit": "ns",
            "range": "± 2968862.6417402485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126357491.66666667,
            "unit": "ns",
            "range": "± 1226960.6857881376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257722056,
            "unit": "ns",
            "range": "± 6669842.143564318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679146.540178572,
            "unit": "ns",
            "range": "± 131743.99487182818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778551.3802083333,
            "unit": "ns",
            "range": "± 25089.57365351185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286325.030048077,
            "unit": "ns",
            "range": "± 13003.378641027804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3349116.5660511362,
            "unit": "ns",
            "range": "± 80997.19268353387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002027.1344866072,
            "unit": "ns",
            "range": "± 17504.726936793293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945926.9670758928,
            "unit": "ns",
            "range": "± 12812.243057615127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3989721.4285714286,
            "unit": "ns",
            "range": "± 68114.79200665513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4332981.25,
            "unit": "ns",
            "range": "± 74313.75125103025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5062320,
            "unit": "ns",
            "range": "± 84553.03661016558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4939213.333333333,
            "unit": "ns",
            "range": "± 145629.52697319587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12296228.888888888,
            "unit": "ns",
            "range": "± 745125.2182294251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317253.0120481928,
            "unit": "ns",
            "range": "± 16908.868630925663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305646.8085106383,
            "unit": "ns",
            "range": "± 11929.846587151465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284608.77192982455,
            "unit": "ns",
            "range": "± 12346.706916388595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5068421.428571428,
            "unit": "ns",
            "range": "± 72190.89201630556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4692092.857142857,
            "unit": "ns",
            "range": "± 54162.4971627149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27675,
            "unit": "ns",
            "range": "± 2679.7878941988556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113619.58762886598,
            "unit": "ns",
            "range": "± 10618.180548545593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100371.57894736843,
            "unit": "ns",
            "range": "± 8694.185672142028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108035.05154639175,
            "unit": "ns",
            "range": "± 16638.259381850374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7757.894736842105,
            "unit": "ns",
            "range": "± 1188.381605321128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28042.268041237112,
            "unit": "ns",
            "range": "± 2220.774782759123"
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
          "id": "3e390e89dc614b57de77d1470d1f94ccc3786631",
          "message": "Changelog",
          "timestamp": "2023-10-04T12:59:56+09:00",
          "tree_id": "1847fdc365e95467fdda18d024cbc0ab419b26f3",
          "url": "https://github.com/greymistcube/libplanet/commit/3e390e89dc614b57de77d1470d1f94ccc3786631"
        },
        "date": 1696393180025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651907.4468085107,
            "unit": "ns",
            "range": "± 193374.13802206513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3241147.9591836734,
            "unit": "ns",
            "range": "± 351208.4208738443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488160.4395604394,
            "unit": "ns",
            "range": "± 199826.55138845948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11473600,
            "unit": "ns",
            "range": "± 1068214.559980272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63662.5,
            "unit": "ns",
            "range": "± 18119.95846399329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8546969.23076923,
            "unit": "ns",
            "range": "± 642058.6308797502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22504080.412371133,
            "unit": "ns",
            "range": "± 1799952.693686187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61071600,
            "unit": "ns",
            "range": "± 3926782.4636678942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125399857.33333333,
            "unit": "ns",
            "range": "± 5978115.45215012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258847872.2222222,
            "unit": "ns",
            "range": "± 10820183.755099516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5377978.57349537,
            "unit": "ns",
            "range": "± 150262.88947793367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1700478.0208333333,
            "unit": "ns",
            "range": "± 19600.942794471703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258656.15234375,
            "unit": "ns",
            "range": "± 21075.221624530954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3111517.277644231,
            "unit": "ns",
            "range": "± 47437.685600431345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028043.0772569445,
            "unit": "ns",
            "range": "± 20672.660592091248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948847.4609375,
            "unit": "ns",
            "range": "± 15453.613537707688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663261.4583333335,
            "unit": "ns",
            "range": "± 324861.96141220926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3798245.263157895,
            "unit": "ns",
            "range": "± 401585.75877744413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4815020.833333333,
            "unit": "ns",
            "range": "± 357974.46069345775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4631705.263157895,
            "unit": "ns",
            "range": "± 508339.77085368696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13129169.411764706,
            "unit": "ns",
            "range": "± 853661.3208526482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306609.375,
            "unit": "ns",
            "range": "± 49130.30810347219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293500,
            "unit": "ns",
            "range": "± 48096.09241157911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261109.47368421053,
            "unit": "ns",
            "range": "± 34989.14443714578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345204.347826087,
            "unit": "ns",
            "range": "± 292940.20126870635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4034047.8723404254,
            "unit": "ns",
            "range": "± 305279.24911736295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23769.38775510204,
            "unit": "ns",
            "range": "± 7876.421922529555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100365.65656565657,
            "unit": "ns",
            "range": "± 22455.848570555212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92018.36734693877,
            "unit": "ns",
            "range": "± 19962.82806927563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110334.375,
            "unit": "ns",
            "range": "± 28260.80353506192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5637.209302325581,
            "unit": "ns",
            "range": "± 1511.9949044131306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29713.131313131315,
            "unit": "ns",
            "range": "± 11110.269623876551"
          }
        ]
      }
    ]
  }
}