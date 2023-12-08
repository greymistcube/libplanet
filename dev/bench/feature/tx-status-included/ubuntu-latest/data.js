window.BENCHMARK_DATA = {
  "lastUpdate": 1702003027410,
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
          "id": "718d7eab7705a0ccf84634c14106a58dbfe3fad0",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:09:49+09:00",
          "tree_id": "1a9ea1ff57502e6c167c79e20296575b0a8644cc",
          "url": "https://github.com/greymistcube/libplanet/commit/718d7eab7705a0ccf84634c14106a58dbfe3fad0"
        },
        "date": 1702002055091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238637.66666666666,
            "unit": "ns",
            "range": "± 9758.985930242274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238631.10606060605,
            "unit": "ns",
            "range": "± 7487.711979217158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190060.17857142858,
            "unit": "ns",
            "range": "± 10185.024500518484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3184811.8571428573,
            "unit": "ns",
            "range": "± 39477.56040677197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2951085.7333333334,
            "unit": "ns",
            "range": "± 46922.99627880718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23968.959595959597,
            "unit": "ns",
            "range": "± 5290.001872842522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94775.02525252526,
            "unit": "ns",
            "range": "± 12603.861419441198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92351.5,
            "unit": "ns",
            "range": "± 2809.587944629008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100657.2258064516,
            "unit": "ns",
            "range": "± 11144.952452869331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8081.145833333333,
            "unit": "ns",
            "range": "± 1177.6948043499983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21488.58695652174,
            "unit": "ns",
            "range": "± 1559.1310319447346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47423.6875,
            "unit": "ns",
            "range": "± 6936.324798612166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078064.194736842,
            "unit": "ns",
            "range": "± 98494.37713576989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1997438.2894736843,
            "unit": "ns",
            "range": "± 68803.98628179396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642367.7272727273,
            "unit": "ns",
            "range": "± 163034.35544812033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6281795.888888889,
            "unit": "ns",
            "range": "± 263145.9467703015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2632659.5,
            "unit": "ns",
            "range": "± 38081.79574941287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2765679.1129032257,
            "unit": "ns",
            "range": "± 70665.95971926767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3328303.5,
            "unit": "ns",
            "range": "± 91311.14589645164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211789.744680851,
            "unit": "ns",
            "range": "± 122907.88615471488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7203985.619047619,
            "unit": "ns",
            "range": "± 167790.1268270801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6134452.8,
            "unit": "ns",
            "range": "± 59964.436163922546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15172433,
            "unit": "ns",
            "range": "± 69822.06096020633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37541687.916666664,
            "unit": "ns",
            "range": "± 114706.70089759624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76889849.92857143,
            "unit": "ns",
            "range": "± 789869.2146344875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150381184.85714287,
            "unit": "ns",
            "range": "± 894513.7125600365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749050.385091146,
            "unit": "ns",
            "range": "± 22201.168933337565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208450.8478816105,
            "unit": "ns",
            "range": "± 2279.5963561288604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768347.251813616,
            "unit": "ns",
            "range": "± 1535.839266859718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953607.1721754808,
            "unit": "ns",
            "range": "± 10868.720428664468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623253.3313551683,
            "unit": "ns",
            "range": "± 862.5561962196674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574158.1201171875,
            "unit": "ns",
            "range": "± 978.2833528365574"
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
          "id": "5f33b5ed2dc37e320a5f3dde70b899060605f70b",
          "message": "Fixed cherry-pick conflicts",
          "timestamp": "2023-12-08T11:25:38+09:00",
          "tree_id": "4d891cda13d5c124a46b42fd03a4300f1ba5424c",
          "url": "https://github.com/greymistcube/libplanet/commit/5f33b5ed2dc37e320a5f3dde70b899060605f70b"
        },
        "date": 1702003021192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194421.77049180327,
            "unit": "ns",
            "range": "± 8360.883315362962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188218.6603773585,
            "unit": "ns",
            "range": "± 7783.059680988124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166172.95833333334,
            "unit": "ns",
            "range": "± 4136.582600031584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059619.3571428573,
            "unit": "ns",
            "range": "± 37277.57392621167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844884.3846153845,
            "unit": "ns",
            "range": "± 22855.21193126585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16057.217391304348,
            "unit": "ns",
            "range": "± 2117.0732587680864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64966.4,
            "unit": "ns",
            "range": "± 6316.01682913041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60915.050561797754,
            "unit": "ns",
            "range": "± 6625.341245090076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66217.39175257731,
            "unit": "ns",
            "range": "± 18334.23334602781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3179.4086021505377,
            "unit": "ns",
            "range": "± 489.33289185955357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14235.953608247422,
            "unit": "ns",
            "range": "± 2444.7621519477557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803644.38828125,
            "unit": "ns",
            "range": "± 67482.1672815268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216670.262469952,
            "unit": "ns",
            "range": "± 1550.9941539231068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779245.9305889423,
            "unit": "ns",
            "range": "± 3287.9292317824875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928253.7008713942,
            "unit": "ns",
            "range": "± 13194.360551933689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615583.4657505581,
            "unit": "ns",
            "range": "± 1505.7406211053697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554382.2897135416,
            "unit": "ns",
            "range": "± 476.9373031054529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40694.114583333336,
            "unit": "ns",
            "range": "± 5297.365856566016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2373175.5714285714,
            "unit": "ns",
            "range": "± 44613.26120849207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2505490.125,
            "unit": "ns",
            "range": "± 49008.65488445213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128173.210526316,
            "unit": "ns",
            "range": "± 68372.30374986884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2981193.44,
            "unit": "ns",
            "range": "± 115815.44181296838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6989969.894736842,
            "unit": "ns",
            "range": "± 138587.75805479707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5617576.071428572,
            "unit": "ns",
            "range": "± 42131.284648226545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14127940.57142857,
            "unit": "ns",
            "range": "± 82542.17810164532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36789973.06666667,
            "unit": "ns",
            "range": "± 180394.33732697403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74543216.57142857,
            "unit": "ns",
            "range": "± 360588.7644426317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148836019.73076922,
            "unit": "ns",
            "range": "± 1114025.4636525111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963337.3936170213,
            "unit": "ns",
            "range": "± 77814.78100906382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1842037.261904762,
            "unit": "ns",
            "range": "± 43333.277454982286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1417562.797979798,
            "unit": "ns",
            "range": "± 107247.90643596521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6072173.226666667,
            "unit": "ns",
            "range": "± 305314.64610125474"
          }
        ]
      }
    ]
  }
}