window.BENCHMARK_DATA = {
  "lastUpdate": 1691651100110,
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
          "id": "cff522d7d987b363c6c80a59391a80c6c81f5b74",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:47:29+09:00",
          "tree_id": "4f1744526a70056ce5533b086592ae352b6a96ea",
          "url": "https://github.com/greymistcube/libplanet/commit/cff522d7d987b363c6c80a59391a80c6c81f5b74"
        },
        "date": 1691650983558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8743154.433333334,
            "unit": "ns",
            "range": "± 123822.03619911618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21568958.785714287,
            "unit": "ns",
            "range": "± 267875.5820480208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53191765.333333336,
            "unit": "ns",
            "range": "± 468395.35805383575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106746444.41666667,
            "unit": "ns",
            "range": "± 1382727.8134071506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216444277.7142857,
            "unit": "ns",
            "range": "± 2167216.055354051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70573.94680851063,
            "unit": "ns",
            "range": "± 11567.198767191687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322542.59574468085,
            "unit": "ns",
            "range": "± 25505.114979754926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308857.4895833333,
            "unit": "ns",
            "range": "± 21664.213058937734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314725.7027027027,
            "unit": "ns",
            "range": "± 10415.794883159328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4164041,
            "unit": "ns",
            "range": "± 59156.14362008396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702138.285714286,
            "unit": "ns",
            "range": "± 54706.058864877785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27050.106382978724,
            "unit": "ns",
            "range": "± 2933.7787569979746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118472.1875,
            "unit": "ns",
            "range": "± 10303.004969233618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123125.32142857143,
            "unit": "ns",
            "range": "± 6610.047923127433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115934.96774193548,
            "unit": "ns",
            "range": "± 9371.513212983376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9330.12886597938,
            "unit": "ns",
            "range": "± 1006.9937760440274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25289.447368421053,
            "unit": "ns",
            "range": "± 4009.230865826801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618629.0526315789,
            "unit": "ns",
            "range": "± 171640.8245857492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2919070.104651163,
            "unit": "ns",
            "range": "± 103604.65313280359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146217.2989690723,
            "unit": "ns",
            "range": "± 191735.64577760035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5763692.044776119,
            "unit": "ns",
            "range": "± 271603.5230039637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391564.3958333335,
            "unit": "ns",
            "range": "± 110164.74711013494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517482.1428571427,
            "unit": "ns",
            "range": "± 151305.7230448494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4515095.25,
            "unit": "ns",
            "range": "± 101726.20991396724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3846818.027777778,
            "unit": "ns",
            "range": "± 188784.41978325602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6894007.350746268,
            "unit": "ns",
            "range": "± 306423.76671651134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5715642.721354167,
            "unit": "ns",
            "range": "± 20217.32752028473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1711523.7307692308,
            "unit": "ns",
            "range": "± 8958.43618237219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1010647.0708705357,
            "unit": "ns",
            "range": "± 1316.1647146872644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850950.296316964,
            "unit": "ns",
            "range": "± 18572.812193514394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888147.7037760416,
            "unit": "ns",
            "range": "± 4368.245121717006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711694.199079241,
            "unit": "ns",
            "range": "± 1376.6029272230437"
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
          "id": "9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:48:07+09:00",
          "tree_id": "70397303ba4a4f4f92fafbf90942603852dd6bde",
          "url": "https://github.com/greymistcube/libplanet/commit/9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1"
        },
        "date": 1691651070358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8000804.133333334,
            "unit": "ns",
            "range": "± 121974.10818803581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19244743.35,
            "unit": "ns",
            "range": "± 429126.0314752685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50166862.333333336,
            "unit": "ns",
            "range": "± 483155.10849410703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98483094.55882353,
            "unit": "ns",
            "range": "± 2000536.553461829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193890845.7,
            "unit": "ns",
            "range": "± 4026087.1004688526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63258.734042553195,
            "unit": "ns",
            "range": "± 11167.48989728334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299523.51086956525,
            "unit": "ns",
            "range": "± 19661.728281660762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287146.1170212766,
            "unit": "ns",
            "range": "± 24516.574715962324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287734.09574468085,
            "unit": "ns",
            "range": "± 20496.850933751062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053066.5,
            "unit": "ns",
            "range": "± 60528.696838772266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3761569,
            "unit": "ns",
            "range": "± 52927.16252684303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22097.747368421053,
            "unit": "ns",
            "range": "± 2380.513635655313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103310.65625,
            "unit": "ns",
            "range": "± 8818.588121066385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108101.83684210526,
            "unit": "ns",
            "range": "± 6224.166311106178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103436.8829787234,
            "unit": "ns",
            "range": "± 11561.665920494612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6822.7444444444445,
            "unit": "ns",
            "range": "± 930.4916854299034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22268.878787878788,
            "unit": "ns",
            "range": "± 3822.5593581241073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545611.7474747475,
            "unit": "ns",
            "range": "± 204475.04389864783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2782514.564102564,
            "unit": "ns",
            "range": "± 143069.35895604355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1954485.98989899,
            "unit": "ns",
            "range": "± 203358.08844486336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5786073.458333333,
            "unit": "ns",
            "range": "± 414929.2592316485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3127306.120689655,
            "unit": "ns",
            "range": "± 116364.16099527509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3267948.8048780486,
            "unit": "ns",
            "range": "± 117419.8248647177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241203.4772727275,
            "unit": "ns",
            "range": "± 155491.09578312412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3613078.858974359,
            "unit": "ns",
            "range": "± 160184.82435633772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6589520.952380952,
            "unit": "ns",
            "range": "± 230148.91422696595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5626273.30625,
            "unit": "ns",
            "range": "± 62221.45059233927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1787518.1050502232,
            "unit": "ns",
            "range": "± 23737.503515093802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1014656.3253348215,
            "unit": "ns",
            "range": "± 14664.53740406606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2479423.861886161,
            "unit": "ns",
            "range": "± 22245.25180188802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804622.7278180803,
            "unit": "ns",
            "range": "± 10719.39958441001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706131.2481219952,
            "unit": "ns",
            "range": "± 6920.088563205108"
          }
        ]
      }
    ]
  }
}