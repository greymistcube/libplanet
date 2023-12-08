window.BENCHMARK_DATA = {
  "lastUpdate": 1702003417719,
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
          "id": "43941b04e3d1906195eecd2b2a53d5ff66fc0581",
          "message": "Changelog",
          "timestamp": "2023-12-08T11:31:27+09:00",
          "tree_id": "d5ed442d625d23764bdc746fa0e52be794b536a5",
          "url": "https://github.com/greymistcube/libplanet/commit/43941b04e3d1906195eecd2b2a53d5ff66fc0581"
        },
        "date": 1702003333275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199537.3780487805,
            "unit": "ns",
            "range": "± 7105.133711602907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189677.78048780488,
            "unit": "ns",
            "range": "± 6769.9860026154975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168793.45,
            "unit": "ns",
            "range": "± 3867.8073412396548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3144237.9,
            "unit": "ns",
            "range": "± 53920.16354468627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830355.4285714286,
            "unit": "ns",
            "range": "± 31125.36793656925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12032.193181818182,
            "unit": "ns",
            "range": "± 870.6152779797909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59233.75555555556,
            "unit": "ns",
            "range": "± 4071.0181077904276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56624.336734693876,
            "unit": "ns",
            "range": "± 6237.865690280359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65675.75510204081,
            "unit": "ns",
            "range": "± 15029.102249091047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2543.2413793103447,
            "unit": "ns",
            "range": "± 512.2606977447024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15750.994623655914,
            "unit": "ns",
            "range": "± 1285.6249674909077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756060.2868303573,
            "unit": "ns",
            "range": "± 6544.8418170493505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1179898.0211838942,
            "unit": "ns",
            "range": "± 1981.4888530141154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 787679.4940831801,
            "unit": "ns",
            "range": "± 15861.602990523725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941143.403125,
            "unit": "ns",
            "range": "± 26427.05160538066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629060.5084885817,
            "unit": "ns",
            "range": "± 1706.5449483986483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570743.9581705729,
            "unit": "ns",
            "range": "± 1259.1030291611848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39510.541666666664,
            "unit": "ns",
            "range": "± 5119.128373415612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411425.1578947366,
            "unit": "ns",
            "range": "± 51387.05502498028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533598.4615384615,
            "unit": "ns",
            "range": "± 38973.62055205928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3151755.0833333335,
            "unit": "ns",
            "range": "± 41745.25134553049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2973973.159090909,
            "unit": "ns",
            "range": "± 102709.10360705519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6924056.7272727275,
            "unit": "ns",
            "range": "± 162926.6685589188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5561734.423076923,
            "unit": "ns",
            "range": "± 25164.084970653243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14295013.038461538,
            "unit": "ns",
            "range": "± 88544.5858269676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36356622.35714286,
            "unit": "ns",
            "range": "± 254847.21183745403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75238213.6923077,
            "unit": "ns",
            "range": "± 305340.62273505435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155097575.35714287,
            "unit": "ns",
            "range": "± 1424537.0199210262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937407.5319148937,
            "unit": "ns",
            "range": "± 73640.14039950026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861783.7884615385,
            "unit": "ns",
            "range": "± 76513.83948463091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1389464.9615384615,
            "unit": "ns",
            "range": "± 108086.93304951937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5928923.055555556,
            "unit": "ns",
            "range": "± 248258.97915211006"
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
          "id": "fe2e27d828d77ed0a5588b5242d3bd377b529ebf",
          "message": "Changelog",
          "timestamp": "2023-12-08T11:27:39+09:00",
          "tree_id": "b2a5d69e8ba8ada97c39d83c8ff896127f696a23",
          "url": "https://github.com/greymistcube/libplanet/commit/fe2e27d828d77ed0a5588b5242d3bd377b529ebf"
        },
        "date": 1702003410845,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239614.3,
            "unit": "ns",
            "range": "± 28682.842713806174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232162.57954545456,
            "unit": "ns",
            "range": "± 22222.72440581011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167052.04545454544,
            "unit": "ns",
            "range": "± 3144.5985696909174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3332800.1978021977,
            "unit": "ns",
            "range": "± 247740.7087772402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3217199.211340206,
            "unit": "ns",
            "range": "± 344207.8718703568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24395.603092783505,
            "unit": "ns",
            "range": "± 3514.55664429069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88394.82608695653,
            "unit": "ns",
            "range": "± 15278.16988897018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92417.77173913043,
            "unit": "ns",
            "range": "± 15136.481060780552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85894.41758241758,
            "unit": "ns",
            "range": "± 19189.599343895716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6366.686868686868,
            "unit": "ns",
            "range": "± 1730.5956073127822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21829.9793814433,
            "unit": "ns",
            "range": "± 6250.391977673917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53399.38775510204,
            "unit": "ns",
            "range": "± 13447.90889572366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1097825.7134831462,
            "unit": "ns",
            "range": "± 148542.5412572004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2162956.532608696,
            "unit": "ns",
            "range": "± 213376.81114437385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633775.4670329671,
            "unit": "ns",
            "range": "± 250784.40986031765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6738530.021505376,
            "unit": "ns",
            "range": "± 732432.3355642244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2760799.404761905,
            "unit": "ns",
            "range": "± 370717.98217672633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2813693.7311827955,
            "unit": "ns",
            "range": "± 256012.15627944478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3361435.215909091,
            "unit": "ns",
            "range": "± 224023.01836195056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3222386.6529411767,
            "unit": "ns",
            "range": "± 314128.44328078924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7816415.804597701,
            "unit": "ns",
            "range": "± 601194.0149395692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6318347.05882353,
            "unit": "ns",
            "range": "± 768965.4949911191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16318343.75257732,
            "unit": "ns",
            "range": "± 1711308.5347544851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39399016.20408163,
            "unit": "ns",
            "range": "± 2812299.779997359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85396747.33928572,
            "unit": "ns",
            "range": "± 3662102.3819618635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 165766275.14285713,
            "unit": "ns",
            "range": "± 2552651.5095440424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4045081.053960756,
            "unit": "ns",
            "range": "± 219420.78569778323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1334594.1542746804,
            "unit": "ns",
            "range": "± 73422.89367704593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776676.9320963542,
            "unit": "ns",
            "range": "± 2372.077001129152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2162223.568359375,
            "unit": "ns",
            "range": "± 100929.19756493629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 668769.1298925781,
            "unit": "ns",
            "range": "± 47658.28467685584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586182.5329511089,
            "unit": "ns",
            "range": "± 4016.1273677397962"
          }
        ]
      }
    ]
  }
}