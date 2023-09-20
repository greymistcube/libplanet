window.BENCHMARK_DATA = {
  "lastUpdate": 1695173916849,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170443342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8111432.9375,
            "unit": "ns",
            "range": "± 153120.0742471819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20498757.201754387,
            "unit": "ns",
            "range": "± 883233.8232187881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50970563.325,
            "unit": "ns",
            "range": "± 1773576.9725731637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101785684.3275862,
            "unit": "ns",
            "range": "± 2868441.4892128278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219957323.7142857,
            "unit": "ns",
            "range": "± 3604015.8624896035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68006.3817204301,
            "unit": "ns",
            "range": "± 13587.648593523285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312672.27956989245,
            "unit": "ns",
            "range": "± 28896.598414739587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308740.2111111111,
            "unit": "ns",
            "range": "± 30020.63694435578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296395.631147541,
            "unit": "ns",
            "range": "± 13275.363248608817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116548.3846153845,
            "unit": "ns",
            "range": "± 110035.9560195037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716827,
            "unit": "ns",
            "range": "± 54568.796410515664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19891.43010752688,
            "unit": "ns",
            "range": "± 3734.6180975751536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77518.18279569893,
            "unit": "ns",
            "range": "± 5667.720517844582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98887.33684210526,
            "unit": "ns",
            "range": "± 12116.57293080259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94248.85416666667,
            "unit": "ns",
            "range": "± 12234.794781561714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6425.428571428572,
            "unit": "ns",
            "range": "± 1559.1734477620457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16407.08620689655,
            "unit": "ns",
            "range": "± 1551.8047598943608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800870.8846153845,
            "unit": "ns",
            "range": "± 20832.436253506457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933292.5443037977,
            "unit": "ns",
            "range": "± 149243.921514137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1881170.0319148935,
            "unit": "ns",
            "range": "± 161239.23570235842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5260571.814814814,
            "unit": "ns",
            "range": "± 221036.6410652293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436945.6428571427,
            "unit": "ns",
            "range": "± 224471.1611613706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483114.4583333335,
            "unit": "ns",
            "range": "± 212097.8772084603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4488932.410714285,
            "unit": "ns",
            "range": "± 179637.48426719417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3792881.081081081,
            "unit": "ns",
            "range": "± 185807.24201083073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6711334.912698412,
            "unit": "ns",
            "range": "± 256041.1388748751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5413003.881696428,
            "unit": "ns",
            "range": "± 80601.36657880104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832130.7869873047,
            "unit": "ns",
            "range": "± 124169.41193065705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053994.9080664061,
            "unit": "ns",
            "range": "± 65278.01654211142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652306.44046875,
            "unit": "ns",
            "range": "± 168780.25609984476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795510.4077758789,
            "unit": "ns",
            "range": "± 15348.831914934355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848070.9653564453,
            "unit": "ns",
            "range": "± 28175.050893498774"
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
          "id": "e3c71bf71f7add86da3a4f1bdcdd534debca8ff4",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:31:37+09:00",
          "tree_id": "88052e6e74edf532d224a56d2f07237a4d9c9bd6",
          "url": "https://github.com/greymistcube/libplanet/commit/e3c71bf71f7add86da3a4f1bdcdd534debca8ff4"
        },
        "date": 1695170858876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7516981.928571428,
            "unit": "ns",
            "range": "± 56381.39282868239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19285438.608695652,
            "unit": "ns",
            "range": "± 474108.516524026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48889137.768115945,
            "unit": "ns",
            "range": "± 2106916.7036441034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95834873.53333333,
            "unit": "ns",
            "range": "± 1335163.6046059176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196941108.26666668,
            "unit": "ns",
            "range": "± 2713782.303172521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53445.27472527473,
            "unit": "ns",
            "range": "± 4954.4681092837445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295121.84831460676,
            "unit": "ns",
            "range": "± 16336.463512437671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288779.87234042556,
            "unit": "ns",
            "range": "± 18428.65693344538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275779.8969072165,
            "unit": "ns",
            "range": "± 17631.271068452814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3973707.592592593,
            "unit": "ns",
            "range": "± 109912.58696005071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549227.527027027,
            "unit": "ns",
            "range": "± 118639.74688818959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17314.565217391304,
            "unit": "ns",
            "range": "± 1519.5824744971405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81905.18556701031,
            "unit": "ns",
            "range": "± 7243.897941155223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77357.08791208791,
            "unit": "ns",
            "range": "± 9213.129721156229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94190.74736842106,
            "unit": "ns",
            "range": "± 16581.898257712088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4963.423076923077,
            "unit": "ns",
            "range": "± 418.8365427856666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17165.326315789473,
            "unit": "ns",
            "range": "± 2003.1424325671842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388578.9742268042,
            "unit": "ns",
            "range": "± 115584.52598171867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2778938,
            "unit": "ns",
            "range": "± 222628.97737319945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1970262.7551020407,
            "unit": "ns",
            "range": "± 252791.4760599296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5465673.418367347,
            "unit": "ns",
            "range": "± 357191.4128450829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3124273.048780488,
            "unit": "ns",
            "range": "± 144634.1700716625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3552563.6,
            "unit": "ns",
            "range": "± 224329.92449920054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221397,
            "unit": "ns",
            "range": "± 135678.3846262919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3612747.259493671,
            "unit": "ns",
            "range": "± 187223.59199734984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6546287.949152542,
            "unit": "ns",
            "range": "± 272700.5113529356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5360611.168229166,
            "unit": "ns",
            "range": "± 41890.53526725304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799552.3614676339,
            "unit": "ns",
            "range": "± 14204.947943632558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 989174.9802083333,
            "unit": "ns",
            "range": "± 6960.128454358209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2421162.4837740385,
            "unit": "ns",
            "range": "± 23774.986821828366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854912.8689453125,
            "unit": "ns",
            "range": "± 7150.626538389628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710909.3517578125,
            "unit": "ns",
            "range": "± 4568.214408913243"
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
          "id": "5659583e81cc89edda326d03130aec7857ba79d8",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:32:15+09:00",
          "tree_id": "45ff3c7c020e6dee9b8c53d9978eef4a4721cf01",
          "url": "https://github.com/greymistcube/libplanet/commit/5659583e81cc89edda326d03130aec7857ba79d8"
        },
        "date": 1695171143494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9006484.294117646,
            "unit": "ns",
            "range": "± 366881.0305399991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22145658.90909091,
            "unit": "ns",
            "range": "± 817076.2349055667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54243637.87931035,
            "unit": "ns",
            "range": "± 1570224.321485819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114095326.5138889,
            "unit": "ns",
            "range": "± 5585688.557970207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225918929.32692307,
            "unit": "ns",
            "range": "± 9149831.140653614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69426.20879120879,
            "unit": "ns",
            "range": "± 9109.827651152333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281086.31395348837,
            "unit": "ns",
            "range": "± 16471.03927826523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277279.3333333333,
            "unit": "ns",
            "range": "± 16668.998248152144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297035.1595744681,
            "unit": "ns",
            "range": "± 33782.38202775058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4058535.290322581,
            "unit": "ns",
            "range": "± 123615.32674556543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3687411.75,
            "unit": "ns",
            "range": "± 103651.09161213449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17947.21649484536,
            "unit": "ns",
            "range": "± 2602.007723321567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90067.1237113402,
            "unit": "ns",
            "range": "± 14665.587455742645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105324.1105263158,
            "unit": "ns",
            "range": "± 14135.245953873025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93560.53125,
            "unit": "ns",
            "range": "± 18620.798619570327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6226.18556701031,
            "unit": "ns",
            "range": "± 1617.1635941382633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22603.9587628866,
            "unit": "ns",
            "range": "± 3680.951543978149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690614.5,
            "unit": "ns",
            "range": "± 186353.85225267152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022514.082089552,
            "unit": "ns",
            "range": "± 135150.23740067595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051575.1868131869,
            "unit": "ns",
            "range": "± 150735.38623870435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5615073.455882353,
            "unit": "ns",
            "range": "± 261000.093334428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3383496.566666667,
            "unit": "ns",
            "range": "± 101064.02757101416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357776.6836734693,
            "unit": "ns",
            "range": "± 247275.2362800042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4157367.8529411764,
            "unit": "ns",
            "range": "± 133436.19430391083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3592834.4516129033,
            "unit": "ns",
            "range": "± 240469.4616949953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7862400.653061224,
            "unit": "ns",
            "range": "± 2212266.9819902466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5808630.8356119795,
            "unit": "ns",
            "range": "± 138571.44049935153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1662443.9065104167,
            "unit": "ns",
            "range": "± 10253.173231819896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002513.1799479167,
            "unit": "ns",
            "range": "± 9210.2828445703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502460.5302083334,
            "unit": "ns",
            "range": "± 13717.176324656519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838107.6841796875,
            "unit": "ns",
            "range": "± 3510.6127459786076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817509.969921875,
            "unit": "ns",
            "range": "± 10051.182506307523"
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
          "id": "fa6bb26a52386a8c69a3f80449580bd8923592d6",
          "message": "Changelog",
          "timestamp": "2023-09-20T10:20:32+09:00",
          "tree_id": "39ff51a5edb05c68e803a2e0d9eec444ab4d1c41",
          "url": "https://github.com/greymistcube/libplanet/commit/fa6bb26a52386a8c69a3f80449580bd8923592d6"
        },
        "date": 1695173901660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8525591.684210526,
            "unit": "ns",
            "range": "± 366476.9672857139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21404726.67857143,
            "unit": "ns",
            "range": "± 915921.7028754271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54527109.79268292,
            "unit": "ns",
            "range": "± 1953302.905988127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106876128.35714285,
            "unit": "ns",
            "range": "± 1867929.0842578996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221468096.57142857,
            "unit": "ns",
            "range": "± 3196034.372672062"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67811.55319148937,
            "unit": "ns",
            "range": "± 11211.919652443072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331983.36559139786,
            "unit": "ns",
            "range": "± 28160.672141336516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352209.0520833333,
            "unit": "ns",
            "range": "± 47066.814590675756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310832.3448275862,
            "unit": "ns",
            "range": "± 21219.52653386903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129773.34375,
            "unit": "ns",
            "range": "± 127224.7533184582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3805777.326923077,
            "unit": "ns",
            "range": "± 150844.56514021978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22544.036082474227,
            "unit": "ns",
            "range": "± 3111.4051289230492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106416.9693877551,
            "unit": "ns",
            "range": "± 12440.600070432907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111810.96315789473,
            "unit": "ns",
            "range": "± 7751.086926951609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101999.3908045977,
            "unit": "ns",
            "range": "± 9356.749870965956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7508.639175257732,
            "unit": "ns",
            "range": "± 896.0257528103266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22783.602150537634,
            "unit": "ns",
            "range": "± 4871.908190440608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632276.27,
            "unit": "ns",
            "range": "± 212291.10179774874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902048.6,
            "unit": "ns",
            "range": "± 135380.2234176508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892439.09375,
            "unit": "ns",
            "range": "± 157042.82702137274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5385750.013513514,
            "unit": "ns",
            "range": "± 269209.713596174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569576.3711340204,
            "unit": "ns",
            "range": "± 303598.69266874867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3737969.3969072164,
            "unit": "ns",
            "range": "± 322231.08286751044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4654872.702020202,
            "unit": "ns",
            "range": "± 425275.33201656025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4075260.776595745,
            "unit": "ns",
            "range": "± 352946.77829749906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6954208.155913979,
            "unit": "ns",
            "range": "± 394295.8117558522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6710584.129807692,
            "unit": "ns",
            "range": "± 94779.21082866828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873339.6555175781,
            "unit": "ns",
            "range": "± 72620.14071028256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095590.6880208333,
            "unit": "ns",
            "range": "± 17439.991552227362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3281869.257890625,
            "unit": "ns",
            "range": "± 84176.00439820398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838348.430078125,
            "unit": "ns",
            "range": "± 8216.869797125151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823112.5585286458,
            "unit": "ns",
            "range": "± 7261.383866102303"
          }
        ]
      }
    ]
  }
}