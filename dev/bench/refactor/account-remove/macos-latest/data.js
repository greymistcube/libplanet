window.BENCHMARK_DATA = {
  "lastUpdate": 1704179172915,
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
          "id": "2197636a9db38fc3f1ee69c5e9bd601837dc1909",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:34:41+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/2197636a9db38fc3f1ee69c5e9bd601837dc1909"
        },
        "date": 1704178296689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8620707.21875,
            "unit": "ns",
            "range": "± 493203.0394600535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23913401.043956045,
            "unit": "ns",
            "range": "± 1810564.1136784349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53291035.553571425,
            "unit": "ns",
            "range": "± 2255377.621855478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105105874.2,
            "unit": "ns",
            "range": "± 2751109.5523757925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215637986,
            "unit": "ns",
            "range": "± 3272481.395480594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60988.168539325845,
            "unit": "ns",
            "range": "± 5765.749047048825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313650.55913978495,
            "unit": "ns",
            "range": "± 33620.67578384208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305721.170212766,
            "unit": "ns",
            "range": "± 39685.7350253586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275668.87362637365,
            "unit": "ns",
            "range": "± 16283.441139628356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3958601,
            "unit": "ns",
            "range": "± 118097.23451026689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3481435.5,
            "unit": "ns",
            "range": "± 22741.147971835613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16752.04761904762,
            "unit": "ns",
            "range": "± 910.9468383409754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99984.04301075269,
            "unit": "ns",
            "range": "± 20635.107514871444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97243.81521739131,
            "unit": "ns",
            "range": "± 14879.41195586349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107411.08510638298,
            "unit": "ns",
            "range": "± 21404.123614191816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6045.822222222222,
            "unit": "ns",
            "range": "± 761.6737420892654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16870.35714285714,
            "unit": "ns",
            "range": "± 1487.0017674684818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412592.8979591837,
            "unit": "ns",
            "range": "± 150614.5776765837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2718715.1346153845,
            "unit": "ns",
            "range": "± 110928.37502058259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168494.668421053,
            "unit": "ns",
            "range": "± 222221.49884224686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9128761.977272727,
            "unit": "ns",
            "range": "± 340465.4066188844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3320226.355670103,
            "unit": "ns",
            "range": "± 257179.87071567858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510121.2731958763,
            "unit": "ns",
            "range": "± 271715.43090499204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4494323.418367347,
            "unit": "ns",
            "range": "± 408885.12291361357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4253013.479381443,
            "unit": "ns",
            "range": "± 367963.8370228843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18853469.52,
            "unit": "ns",
            "range": "± 2941341.3113927785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6363356.239955357,
            "unit": "ns",
            "range": "± 89786.8911880004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968261.5896139706,
            "unit": "ns",
            "range": "± 40324.59110728513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1123128.969501202,
            "unit": "ns",
            "range": "± 18485.815243198304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2805213.1453804346,
            "unit": "ns",
            "range": "± 67976.53820541283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841977.28984375,
            "unit": "ns",
            "range": "± 9988.824320691407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761084.5673828125,
            "unit": "ns",
            "range": "± 10285.511487880281"
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
          "id": "6876527bacbde76abf5fc30535cd81ac438c056f",
          "message": "Added tests",
          "timestamp": "2024-01-02T15:51:35+09:00",
          "tree_id": "5b5d6539ec6fac4fd46da608309eb84511299b4a",
          "url": "https://github.com/greymistcube/libplanet/commit/6876527bacbde76abf5fc30535cd81ac438c056f"
        },
        "date": 1704179155799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8723726.112903226,
            "unit": "ns",
            "range": "± 395167.4777554575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22709912.625,
            "unit": "ns",
            "range": "± 418263.63256585354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52233842.76923077,
            "unit": "ns",
            "range": "± 746152.6821289276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101434254.36842105,
            "unit": "ns",
            "range": "± 2191440.6590972985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209378292.65,
            "unit": "ns",
            "range": "± 7429432.106729711"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60703,
            "unit": "ns",
            "range": "± 6399.64116876008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251091.60674157302,
            "unit": "ns",
            "range": "± 15912.00431679433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259747.99019607843,
            "unit": "ns",
            "range": "± 6851.835069154976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246262.328125,
            "unit": "ns",
            "range": "± 11008.997112109464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4047523.4444444445,
            "unit": "ns",
            "range": "± 82533.77291500109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575487.1923076925,
            "unit": "ns",
            "range": "± 48294.38602015872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18295.214285714286,
            "unit": "ns",
            "range": "± 3905.76063054212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83856.34042553192,
            "unit": "ns",
            "range": "± 18228.431987463267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73174.27551020408,
            "unit": "ns",
            "range": "± 9252.430179270776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81681.4052631579,
            "unit": "ns",
            "range": "± 13963.817709453397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6675.273195876289,
            "unit": "ns",
            "range": "± 1818.4198240113274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12769.38202247191,
            "unit": "ns",
            "range": "± 1570.7500488737128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1213082.5416666667,
            "unit": "ns",
            "range": "± 114194.70975127173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693335.3295454546,
            "unit": "ns",
            "range": "± 185115.46341978034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701069.9347826086,
            "unit": "ns",
            "range": "± 105533.43356598642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7258751,
            "unit": "ns",
            "range": "± 197337.99117681317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047475.842696629,
            "unit": "ns",
            "range": "± 167860.35237342236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3112317.883561644,
            "unit": "ns",
            "range": "± 153936.16114450298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3757946.6666666665,
            "unit": "ns",
            "range": "± 109600.99589729174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3721803.7083333335,
            "unit": "ns",
            "range": "± 230618.85967529862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13882158.663157895,
            "unit": "ns",
            "range": "± 2475647.2627414013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4269999.954799107,
            "unit": "ns",
            "range": "± 35069.32814082481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1309948.9709635417,
            "unit": "ns",
            "range": "± 9537.55298012259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883610.5905198317,
            "unit": "ns",
            "range": "± 14013.30898190272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009991.9046875,
            "unit": "ns",
            "range": "± 26592.031494332437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625410.9702473958,
            "unit": "ns",
            "range": "± 7328.24262565337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569816.2888020833,
            "unit": "ns",
            "range": "± 6710.26635678689"
          }
        ]
      }
    ]
  }
}