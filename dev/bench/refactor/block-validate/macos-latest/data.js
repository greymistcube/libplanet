window.BENCHMARK_DATA = {
  "lastUpdate": 1680673306260,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579970542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8976641.235955056,
            "unit": "ns",
            "range": "± 1151214.4712580517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21973458.54597701,
            "unit": "ns",
            "range": "± 1500904.2184490059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52735827.823529415,
            "unit": "ns",
            "range": "± 1081917.542968862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120877569.42528735,
            "unit": "ns",
            "range": "± 7691805.285098128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220718126.1111111,
            "unit": "ns",
            "range": "± 4675411.548495222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74774.73033707865,
            "unit": "ns",
            "range": "± 9250.058712054513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444273.57608695654,
            "unit": "ns",
            "range": "± 51302.047554886325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 404313.3191489362,
            "unit": "ns",
            "range": "± 62257.39259661705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 381680.625,
            "unit": "ns",
            "range": "± 46973.025906420626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6049664.305263158,
            "unit": "ns",
            "range": "± 474952.17281008716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4987976.030612245,
            "unit": "ns",
            "range": "± 553713.1276041821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27833.415730337078,
            "unit": "ns",
            "range": "± 4217.70563385363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140342.5744680851,
            "unit": "ns",
            "range": "± 25363.124034831013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131343.01162790696,
            "unit": "ns",
            "range": "± 12549.47983899233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 309574.10215053766,
            "unit": "ns",
            "range": "± 43111.31462125232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11222.550561797752,
            "unit": "ns",
            "range": "± 1205.762593578663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27829.391304347828,
            "unit": "ns",
            "range": "± 3248.0214500067227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623284.01,
            "unit": "ns",
            "range": "± 148604.05967308948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190147.75,
            "unit": "ns",
            "range": "± 146257.68179765943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2663520.5204081633,
            "unit": "ns",
            "range": "± 236311.87184085228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7007211.62,
            "unit": "ns",
            "range": "± 277190.4539941173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3738167.8020833335,
            "unit": "ns",
            "range": "± 282839.15483705467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3699049.6827956988,
            "unit": "ns",
            "range": "± 294976.679680856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990147.55319149,
            "unit": "ns",
            "range": "± 421169.8334972922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5303120.840425532,
            "unit": "ns",
            "range": "± 717423.0932702943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10301505.404494382,
            "unit": "ns",
            "range": "± 1034345.2659062081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8256052.892013889,
            "unit": "ns",
            "range": "± 291641.0196209868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275861.1826171875,
            "unit": "ns",
            "range": "± 101297.65657309812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448183.4014648437,
            "unit": "ns",
            "range": "± 32687.54400813374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245618.7786989794,
            "unit": "ns",
            "range": "± 129249.37472990884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908033.4845112645,
            "unit": "ns",
            "range": "± 30275.97260777021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882264.5710499043,
            "unit": "ns",
            "range": "± 32771.56643747415"
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
          "id": "af91da6d3bfa9210229b69530940ca3750a8363d",
          "message": "[skip changelog] Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:50+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/af91da6d3bfa9210229b69530940ca3750a8363d"
        },
        "date": 1680584744136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8331299.071428572,
            "unit": "ns",
            "range": "± 89128.82866387567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24075927.55421687,
            "unit": "ns",
            "range": "± 3656902.1196114295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56621448.52272727,
            "unit": "ns",
            "range": "± 2092294.1781722105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128141988.51111111,
            "unit": "ns",
            "range": "± 7709471.810928702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226675029.89583334,
            "unit": "ns",
            "range": "± 14148992.590114255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81159.67391304347,
            "unit": "ns",
            "range": "± 8683.000366522292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444525.2105263158,
            "unit": "ns",
            "range": "± 61187.62647493411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381555.4438202247,
            "unit": "ns",
            "range": "± 44381.865886858344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368590.32258064515,
            "unit": "ns",
            "range": "± 58005.884272006566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5977717.01010101,
            "unit": "ns",
            "range": "± 403219.61963240313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4489183.189473684,
            "unit": "ns",
            "range": "± 347707.48570838186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26539.468421052632,
            "unit": "ns",
            "range": "± 5998.203758524663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117959.79347826086,
            "unit": "ns",
            "range": "± 21234.80913036503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126529.15168539326,
            "unit": "ns",
            "range": "± 15097.67303044136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 261783.28125,
            "unit": "ns",
            "range": "± 23778.09508602541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8013.103092783505,
            "unit": "ns",
            "range": "± 1156.687399110567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22677.303030303032,
            "unit": "ns",
            "range": "± 5928.135915939164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651888.34375,
            "unit": "ns",
            "range": "± 143765.3004878238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240287.694915254,
            "unit": "ns",
            "range": "± 142709.68970029187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2962144.587912088,
            "unit": "ns",
            "range": "± 344404.37032514386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8519493.806818182,
            "unit": "ns",
            "range": "± 1443614.6070548838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802995.159340659,
            "unit": "ns",
            "range": "± 384058.2100576601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5185249.340425532,
            "unit": "ns",
            "range": "± 1880764.7042932853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4829377.940298508,
            "unit": "ns",
            "range": "± 228272.5019788703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4755495.556701031,
            "unit": "ns",
            "range": "± 365718.95820256596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9972098.244444445,
            "unit": "ns",
            "range": "± 770793.012254096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7181081.675091912,
            "unit": "ns",
            "range": "± 209652.88457921165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2161487.3839588994,
            "unit": "ns",
            "range": "± 156324.53554137042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379919.8090444712,
            "unit": "ns",
            "range": "± 47211.75935170004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002962.7234933036,
            "unit": "ns",
            "range": "± 260405.36749969926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973683.863671875,
            "unit": "ns",
            "range": "± 17093.699945134853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808634.5649937221,
            "unit": "ns",
            "range": "± 34698.93459182921"
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
          "id": "e6554b5d179b9c992fffe18c19fff6753cc53236",
          "message": "Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:29+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/e6554b5d179b9c992fffe18c19fff6753cc53236"
        },
        "date": 1680584782839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9132818.65934066,
            "unit": "ns",
            "range": "± 583737.9646846732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22596761.13265306,
            "unit": "ns",
            "range": "± 890886.2044614783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56245356.77272727,
            "unit": "ns",
            "range": "± 1334609.8918854503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123662234.4137931,
            "unit": "ns",
            "range": "± 5309292.820557989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234076913.71052632,
            "unit": "ns",
            "range": "± 3678843.5837032865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85950.6551724138,
            "unit": "ns",
            "range": "± 8212.616918324704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441812.14285714284,
            "unit": "ns",
            "range": "± 37240.23055202873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388121.4,
            "unit": "ns",
            "range": "± 47973.48867496305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369921.1263157895,
            "unit": "ns",
            "range": "± 34093.691103306846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6085992.430232558,
            "unit": "ns",
            "range": "± 329023.48344649456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4534745.840206185,
            "unit": "ns",
            "range": "± 317939.76200164756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28185.76923076923,
            "unit": "ns",
            "range": "± 3285.6767105352665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140799.73626373627,
            "unit": "ns",
            "range": "± 20408.896440215678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 144214.79569892472,
            "unit": "ns",
            "range": "± 17053.51019875708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 305708.21428571426,
            "unit": "ns",
            "range": "± 33076.96800637636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11917.840425531915,
            "unit": "ns",
            "range": "± 1257.9751314121554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30181.174157303372,
            "unit": "ns",
            "range": "± 5118.106187784521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1967158.7216494845,
            "unit": "ns",
            "range": "± 329034.1753562216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3695798.2717391304,
            "unit": "ns",
            "range": "± 425786.5270547729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2977243.604395604,
            "unit": "ns",
            "range": "± 309467.53840315534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8786022.191489361,
            "unit": "ns",
            "range": "± 1082290.2577053632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547348.402173913,
            "unit": "ns",
            "range": "± 214347.81706858423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3823014.06185567,
            "unit": "ns",
            "range": "± 330696.8429374999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5090785.65625,
            "unit": "ns",
            "range": "± 358120.861441639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5091827.34,
            "unit": "ns",
            "range": "± 438910.29510826536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9818951.79120879,
            "unit": "ns",
            "range": "± 620143.6636115237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8286589.103053978,
            "unit": "ns",
            "range": "± 343001.4950374619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2640762.716796875,
            "unit": "ns",
            "range": "± 140281.59913787452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1544106.5739955357,
            "unit": "ns",
            "range": "± 74890.4088195164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3496549.958857549,
            "unit": "ns",
            "range": "± 178385.35100291923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035701.1112827035,
            "unit": "ns",
            "range": "± 38326.70203310117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012712.0201171875,
            "unit": "ns",
            "range": "± 40420.89082291162"
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680586434310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7841771.269230769,
            "unit": "ns",
            "range": "± 85189.73801575109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20088037.5625,
            "unit": "ns",
            "range": "± 380084.23177868855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48946328.520833336,
            "unit": "ns",
            "range": "± 1911299.1678975623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98540726.33333333,
            "unit": "ns",
            "range": "± 1510195.205434746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203683409,
            "unit": "ns",
            "range": "± 6467654.388596248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63206.770833333336,
            "unit": "ns",
            "range": "± 9791.148897135472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376661.5731707317,
            "unit": "ns",
            "range": "± 19836.19148159696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315437.6777777778,
            "unit": "ns",
            "range": "± 18789.1623630517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312733.0306122449,
            "unit": "ns",
            "range": "± 22859.781984535563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5610403,
            "unit": "ns",
            "range": "± 99148.55309914435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4223570.333333333,
            "unit": "ns",
            "range": "± 62192.91220143368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25577.947916666668,
            "unit": "ns",
            "range": "± 4368.600780136146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119798.67,
            "unit": "ns",
            "range": "± 12951.636846013329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119217.34042553192,
            "unit": "ns",
            "range": "± 10316.66942646256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 266899.9583333333,
            "unit": "ns",
            "range": "± 20339.695593600973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9776.783505154639,
            "unit": "ns",
            "range": "± 821.9001007168811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23100.91,
            "unit": "ns",
            "range": "± 3637.313588808824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649226.3917525774,
            "unit": "ns",
            "range": "± 211432.18202552348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133371.904255319,
            "unit": "ns",
            "range": "± 194668.81526725137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2602174.5425531915,
            "unit": "ns",
            "range": "± 223716.06408429667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7049725.685714286,
            "unit": "ns",
            "range": "± 340601.30500509706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3224444.460526316,
            "unit": "ns",
            "range": "± 162737.76948382866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3378587.172413793,
            "unit": "ns",
            "range": "± 147262.57765639186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4417720.630434782,
            "unit": "ns",
            "range": "± 108007.99038046984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4610951.943661972,
            "unit": "ns",
            "range": "± 225978.31054486416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8885574.39361702,
            "unit": "ns",
            "range": "± 340409.60927556176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6549669.04453125,
            "unit": "ns",
            "range": "± 121141.75354308008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982089.8189174107,
            "unit": "ns",
            "range": "± 11930.681868458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299322.0111607143,
            "unit": "ns",
            "range": "± 4959.359907408937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2930228.9064127603,
            "unit": "ns",
            "range": "± 74640.42586102532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861142.9604492188,
            "unit": "ns",
            "range": "± 3884.1632433372847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728787.9738581731,
            "unit": "ns",
            "range": "± 2958.3335702160707"
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
          "id": "74e4d416e7ffdbacf023f60149719f43311df8ca",
          "message": "Separate nonce check for genesis",
          "timestamp": "2023-04-03T18:14:20+09:00",
          "tree_id": "b52734325a8d6def243b06c8dde39849f103fd77",
          "url": "https://github.com/greymistcube/libplanet/commit/74e4d416e7ffdbacf023f60149719f43311df8ca"
        },
        "date": 1680590618496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9161890.352941176,
            "unit": "ns",
            "range": "± 374064.2937234092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23414838.066666666,
            "unit": "ns",
            "range": "± 390528.7165271619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56836452.461538464,
            "unit": "ns",
            "range": "± 937154.3891688476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116913125.42857143,
            "unit": "ns",
            "range": "± 1700583.5263837534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235625946.45945945,
            "unit": "ns",
            "range": "± 7990442.084030989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65427.53488372093,
            "unit": "ns",
            "range": "± 5481.646838631133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419481.73913043475,
            "unit": "ns",
            "range": "± 28153.11111372504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342720.87078651687,
            "unit": "ns",
            "range": "± 26891.091472397777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331587.46875,
            "unit": "ns",
            "range": "± 10106.60176602682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6219753.24137931,
            "unit": "ns",
            "range": "± 181341.38934610423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4718573.4,
            "unit": "ns",
            "range": "± 66459.2273146261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20227.59375,
            "unit": "ns",
            "range": "± 1591.4147402009783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99801.37096774194,
            "unit": "ns",
            "range": "± 6150.7695863939525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91566.44623655915,
            "unit": "ns",
            "range": "± 7178.218893723464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252927.85714285713,
            "unit": "ns",
            "range": "± 26316.7961881428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.021276595745,
            "unit": "ns",
            "range": "± 529.1457658130911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19850.384615384617,
            "unit": "ns",
            "range": "± 1714.3021953827208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676361.252631579,
            "unit": "ns",
            "range": "± 218836.58604290604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3341862.2674418604,
            "unit": "ns",
            "range": "± 318443.62450369634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3078234.0412371135,
            "unit": "ns",
            "range": "± 388223.72774594364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8202423.2950819675,
            "unit": "ns",
            "range": "± 364500.6169518942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3937489.8947368423,
            "unit": "ns",
            "range": "± 438179.6513163432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4022526.5714285714,
            "unit": "ns",
            "range": "± 421728.5211144748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110075.760869565,
            "unit": "ns",
            "range": "± 305626.4278144897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4945198.978021978,
            "unit": "ns",
            "range": "± 427245.00993130344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10078091.768817205,
            "unit": "ns",
            "range": "± 651696.8219034588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7114764.010602678,
            "unit": "ns",
            "range": "± 92878.26368279598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286756.724051339,
            "unit": "ns",
            "range": "± 35620.54772773482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445288.1541015625,
            "unit": "ns",
            "range": "± 50885.97812186901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865572.2449776786,
            "unit": "ns",
            "range": "± 34497.72895048672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949312.2427509015,
            "unit": "ns",
            "range": "± 13773.486696362223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806104.646484375,
            "unit": "ns",
            "range": "± 15273.086526330682"
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
          "id": "609e7adb2a7a9a9f67d6a7686cf61066542b5380",
          "message": "Changed to throw exceptions instead of returning for validation\n\nCleanup",
          "timestamp": "2023-04-04T15:38:40+09:00",
          "tree_id": "b63ea20cd158d6be05c640962054866b6b5ebb27",
          "url": "https://github.com/greymistcube/libplanet/commit/609e7adb2a7a9a9f67d6a7686cf61066542b5380"
        },
        "date": 1680591492708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8451740.583333334,
            "unit": "ns",
            "range": "± 218226.94767482547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24651841.23809524,
            "unit": "ns",
            "range": "± 2493444.980124458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52034817.777777776,
            "unit": "ns",
            "range": "± 1098588.4913316271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110955698.86153845,
            "unit": "ns",
            "range": "± 5162824.754473737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216532824.47297296,
            "unit": "ns",
            "range": "± 6268639.237356849"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70056.38043478261,
            "unit": "ns",
            "range": "± 8406.942420028754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 423378.36734693876,
            "unit": "ns",
            "range": "± 52949.38155288254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335551.13440860214,
            "unit": "ns",
            "range": "± 32719.082029679408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333502.0909090909,
            "unit": "ns",
            "range": "± 23670.78324662878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6013915.686868687,
            "unit": "ns",
            "range": "± 518673.99251699843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4431067,
            "unit": "ns",
            "range": "± 378907.4759707524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20898.25,
            "unit": "ns",
            "range": "± 3723.1036458705707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102512.10824742269,
            "unit": "ns",
            "range": "± 15719.646437365078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111851.11235955056,
            "unit": "ns",
            "range": "± 11382.058173281279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260359.8510638298,
            "unit": "ns",
            "range": "± 29306.59792751636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7794.918367346939,
            "unit": "ns",
            "range": "± 1326.7092431832311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20759.4375,
            "unit": "ns",
            "range": "± 3673.7977075572126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669507.2551020407,
            "unit": "ns",
            "range": "± 190627.56352579128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933573,
            "unit": "ns",
            "range": "± 89228.20020412082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2568757.93877551,
            "unit": "ns",
            "range": "± 260612.08471078306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6589894.5,
            "unit": "ns",
            "range": "± 164039.42288550243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3730649.084269663,
            "unit": "ns",
            "range": "± 503914.2279455856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3677096.536082474,
            "unit": "ns",
            "range": "± 285672.8325386352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653117.035294117,
            "unit": "ns",
            "range": "± 250078.30813083745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4780098.308510638,
            "unit": "ns",
            "range": "± 304205.96161158226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9853620.387755102,
            "unit": "ns",
            "range": "± 809764.350832037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6768263.567325368,
            "unit": "ns",
            "range": "± 132986.18597953883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046140.17265625,
            "unit": "ns",
            "range": "± 45595.58403210456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294653.5321614584,
            "unit": "ns",
            "range": "± 14923.057697740056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2889201.005703125,
            "unit": "ns",
            "range": "± 115723.67151984085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855113.6146484375,
            "unit": "ns",
            "range": "± 11272.82884499336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722808.2783203125,
            "unit": "ns",
            "range": "± 4189.484710417699"
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
          "id": "a2dbcf82e0321da87a527ebf0b627e86971605d6",
          "message": "Changed to throw exceptions instead of returning for validation",
          "timestamp": "2023-04-04T15:57:07+09:00",
          "tree_id": "10d9bb6df7318e2b51b42cb3deb90bfb48f3159a",
          "url": "https://github.com/greymistcube/libplanet/commit/a2dbcf82e0321da87a527ebf0b627e86971605d6"
        },
        "date": 1680592791947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8929350.318181818,
            "unit": "ns",
            "range": "± 219182.94400653106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22497816.6875,
            "unit": "ns",
            "range": "± 429748.970801206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55763537.38888889,
            "unit": "ns",
            "range": "± 1167100.1982723293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112061281.51851852,
            "unit": "ns",
            "range": "± 3102565.0546607072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228619210.3,
            "unit": "ns",
            "range": "± 3482112.4749067444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68048.01041666667,
            "unit": "ns",
            "range": "± 8158.665246220755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445261.3375,
            "unit": "ns",
            "range": "± 22890.872766757766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366471.8333333333,
            "unit": "ns",
            "range": "± 24490.616393208606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319777.93258426967,
            "unit": "ns",
            "range": "± 17711.502697783308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6356128.035714285,
            "unit": "ns",
            "range": "± 176036.5612381537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4582485.939393939,
            "unit": "ns",
            "range": "± 141340.95103882212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20679.409638554218,
            "unit": "ns",
            "range": "± 1929.619222112225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104603.37755102041,
            "unit": "ns",
            "range": "± 11045.158978069581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92476.9175257732,
            "unit": "ns",
            "range": "± 9237.344024021577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 255545.912371134,
            "unit": "ns",
            "range": "± 19267.25292149036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6064.795698924731,
            "unit": "ns",
            "range": "± 524.10301342098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20036.544444444444,
            "unit": "ns",
            "range": "± 1743.3625855639068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853635.7142857143,
            "unit": "ns",
            "range": "± 173491.987272356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3493551.1964285714,
            "unit": "ns",
            "range": "± 149595.1253101541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2851713.1690140846,
            "unit": "ns",
            "range": "± 139251.2070684781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7900039.366666666,
            "unit": "ns",
            "range": "± 300349.8348101457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3766290.5384615385,
            "unit": "ns",
            "range": "± 99562.81618485117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3979479.5588235296,
            "unit": "ns",
            "range": "± 188331.23102216702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5208966.444444444,
            "unit": "ns",
            "range": "± 172851.33713346103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5117966.153846154,
            "unit": "ns",
            "range": "± 263177.5310543666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10315813.392857144,
            "unit": "ns",
            "range": "± 288934.9449361991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6952589.740104167,
            "unit": "ns",
            "range": "± 93565.56441481152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2140947.0920758927,
            "unit": "ns",
            "range": "± 19210.37184587267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454328.00390625,
            "unit": "ns",
            "range": "± 12197.244466394734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2903392.1296875,
            "unit": "ns",
            "range": "± 27874.88594327376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983066.15078125,
            "unit": "ns",
            "range": "± 12039.022281826368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829327.8499348959,
            "unit": "ns",
            "range": "± 6910.7738387860445"
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
          "id": "bcc4772395a25b3ff32dd441fc2d429e4876f7e9",
          "message": "Code reorganization and renaming for consistency",
          "timestamp": "2023-04-04T16:00:01+09:00",
          "tree_id": "e3ae7aa6eb72b7c46d47c8186f88e83b660a83fe",
          "url": "https://github.com/greymistcube/libplanet/commit/bcc4772395a25b3ff32dd441fc2d429e4876f7e9"
        },
        "date": 1680593291677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10155207.958333334,
            "unit": "ns",
            "range": "± 713099.489963282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24168569.5,
            "unit": "ns",
            "range": "± 2171017.067973751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61934625.36363637,
            "unit": "ns",
            "range": "± 4113815.88028333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121487651.41489361,
            "unit": "ns",
            "range": "± 17110433.576769188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243428540.75,
            "unit": "ns",
            "range": "± 8789746.123707093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87568.10989010989,
            "unit": "ns",
            "range": "± 13708.781869420256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396109.87362637365,
            "unit": "ns",
            "range": "± 34841.31593051508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330502.48913043475,
            "unit": "ns",
            "range": "± 26936.45358723051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356779.8804347826,
            "unit": "ns",
            "range": "± 42990.18317557002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6122309.617021277,
            "unit": "ns",
            "range": "± 384737.90884372586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4274859.8125,
            "unit": "ns",
            "range": "± 309069.18363387807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25014.05319148936,
            "unit": "ns",
            "range": "± 4257.507651871268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135798.8,
            "unit": "ns",
            "range": "± 21936.252626402762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134669.23626373627,
            "unit": "ns",
            "range": "± 19124.74702335819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 284128,
            "unit": "ns",
            "range": "± 31545.719953499483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11462.234042553191,
            "unit": "ns",
            "range": "± 1712.9242582576637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28250.255555555555,
            "unit": "ns",
            "range": "± 2875.1199352066556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634350.1041666667,
            "unit": "ns",
            "range": "± 161224.16100941272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066797.7,
            "unit": "ns",
            "range": "± 115845.92062237434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2867730.033333333,
            "unit": "ns",
            "range": "± 336139.1727646168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7668331.693877551,
            "unit": "ns",
            "range": "± 649250.8298910956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3658134.783505155,
            "unit": "ns",
            "range": "± 365478.7207060085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3987120.1288659796,
            "unit": "ns",
            "range": "± 381915.5245311214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179776.831578948,
            "unit": "ns",
            "range": "± 431926.22999635595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4849432.291666667,
            "unit": "ns",
            "range": "± 381014.9448477654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9882983.979166666,
            "unit": "ns",
            "range": "± 803613.1515020471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7994666.897750687,
            "unit": "ns",
            "range": "± 488037.09015804174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330771.869733146,
            "unit": "ns",
            "range": "± 129018.65587730813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499443.4717881945,
            "unit": "ns",
            "range": "± 96366.70758534114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3189601.3489851803,
            "unit": "ns",
            "range": "± 328491.5274745835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918171.1305509869,
            "unit": "ns",
            "range": "± 30974.002340344043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845992.5192485609,
            "unit": "ns",
            "range": "± 42790.751887291844"
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
          "id": "efbfa4d05e76436dbfb9df3d89430b8630d13e62",
          "message": "[skip changelog] Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:11:20+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/efbfa4d05e76436dbfb9df3d89430b8630d13e62"
        },
        "date": 1680593499195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10143231.466666667,
            "unit": "ns",
            "range": "± 1007419.649554095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23862372.782828283,
            "unit": "ns",
            "range": "± 1908545.166205567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58294031.977011494,
            "unit": "ns",
            "range": "± 4687598.513715208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113690939.01515152,
            "unit": "ns",
            "range": "± 3564366.2999569797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224161974.8148148,
            "unit": "ns",
            "range": "± 9335564.624547057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73706.42222222222,
            "unit": "ns",
            "range": "± 8707.15986148372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400760.3146067416,
            "unit": "ns",
            "range": "± 28396.902007963785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350694.8369565217,
            "unit": "ns",
            "range": "± 41166.95663620777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327241.5411764706,
            "unit": "ns",
            "range": "± 29732.217387858575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5901540.90625,
            "unit": "ns",
            "range": "± 489141.27512941806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4379416.221649485,
            "unit": "ns",
            "range": "± 334537.312700216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23077.744444444445,
            "unit": "ns",
            "range": "± 3655.534090955428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100019.2947368421,
            "unit": "ns",
            "range": "± 18426.8967434307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109380.48979591837,
            "unit": "ns",
            "range": "± 14722.188200369921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 268697.06842105265,
            "unit": "ns",
            "range": "± 34682.9741662085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8946.36170212766,
            "unit": "ns",
            "range": "± 910.7974628326804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24567.67816091954,
            "unit": "ns",
            "range": "± 3503.545428510067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623643.98989899,
            "unit": "ns",
            "range": "± 171782.11295883497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3067096.402173913,
            "unit": "ns",
            "range": "± 188722.75055997988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2625117.6021505375,
            "unit": "ns",
            "range": "± 214446.59290531688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7395471.9948453605,
            "unit": "ns",
            "range": "± 620347.3251434958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3716402.5222222223,
            "unit": "ns",
            "range": "± 489975.90740839415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432596.52,
            "unit": "ns",
            "range": "± 136641.37855454074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4896383.808510638,
            "unit": "ns",
            "range": "± 542392.1129805552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5287739.833333333,
            "unit": "ns",
            "range": "± 728859.3073327325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9576967.403225806,
            "unit": "ns",
            "range": "± 665296.6187228571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7678024.578584559,
            "unit": "ns",
            "range": "± 361576.84863691276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197151.84171875,
            "unit": "ns",
            "range": "± 56644.280685663514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423507.0335036058,
            "unit": "ns",
            "range": "± 23689.86627189244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3328135.1353365383,
            "unit": "ns",
            "range": "± 155441.89877913054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978671.019921875,
            "unit": "ns",
            "range": "± 28891.772779983417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860271.6924937855,
            "unit": "ns",
            "range": "± 32290.885274866654"
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
          "id": "050416c796e9af50793ff1c9074dc9135238e031",
          "message": "Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:10:28+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/050416c796e9af50793ff1c9074dc9135238e031"
        },
        "date": 1680593570463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8747796.988372093,
            "unit": "ns",
            "range": "± 590755.5647923605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19718680.807692308,
            "unit": "ns",
            "range": "± 311521.1578885626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55758148.6627907,
            "unit": "ns",
            "range": "± 4479024.106965733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113247645.8275862,
            "unit": "ns",
            "range": "± 7893236.945509911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214885963.0064935,
            "unit": "ns",
            "range": "± 10950332.04215953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82429.09782608696,
            "unit": "ns",
            "range": "± 14165.16263531169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 465813.6808510638,
            "unit": "ns",
            "range": "± 71450.23794688066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366198.02173913043,
            "unit": "ns",
            "range": "± 64672.02163537271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 400261.40721649484,
            "unit": "ns",
            "range": "± 95029.13576066229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6272555.602040816,
            "unit": "ns",
            "range": "± 564780.5520800673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4429429.234042553,
            "unit": "ns",
            "range": "± 376788.02577154833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22658.67816091954,
            "unit": "ns",
            "range": "± 3143.3127632759233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108611.82291666667,
            "unit": "ns",
            "range": "± 23191.55302146147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131174.53333333333,
            "unit": "ns",
            "range": "± 16433.303131381257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 304165.91489361704,
            "unit": "ns",
            "range": "± 41560.60547171413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11634.144444444444,
            "unit": "ns",
            "range": "± 1317.4250127785763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25537.077319587628,
            "unit": "ns",
            "range": "± 5472.548731766907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764869.2021276595,
            "unit": "ns",
            "range": "± 251371.6038847422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3212302.4310344825,
            "unit": "ns",
            "range": "± 125239.91155726816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2826546.9795918367,
            "unit": "ns",
            "range": "± 271624.94886067923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7308927.424050633,
            "unit": "ns",
            "range": "± 377432.7497505358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3385953.2705882355,
            "unit": "ns",
            "range": "± 259787.6026281758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3611244.4591836734,
            "unit": "ns",
            "range": "± 260339.29680862164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4716585.670212766,
            "unit": "ns",
            "range": "± 329892.426157389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4930970.655555556,
            "unit": "ns",
            "range": "± 360121.3685219103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10016894.072164949,
            "unit": "ns",
            "range": "± 942494.9687090538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7557903.12625,
            "unit": "ns",
            "range": "± 201029.39974831298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2148684.8203125,
            "unit": "ns",
            "range": "± 27641.75084768206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442375.8888608871,
            "unit": "ns",
            "range": "± 43770.25335188157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3243780.878786671,
            "unit": "ns",
            "range": "± 213535.10958970385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879524.6305588942,
            "unit": "ns",
            "range": "± 10234.954647528513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810424.6002663352,
            "unit": "ns",
            "range": "± 34050.31389783521"
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
          "id": "e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:40:39+09:00",
          "tree_id": "5d3d0c4d2af044b4fcc2bd04951becd21e60a71c",
          "url": "https://github.com/greymistcube/libplanet/commit/e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0"
        },
        "date": 1680595027030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8793857.866666667,
            "unit": "ns",
            "range": "± 60490.96933765837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23363786.53846154,
            "unit": "ns",
            "range": "± 245932.7569562513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56594558.615384616,
            "unit": "ns",
            "range": "± 687883.4490572681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115177316.21428572,
            "unit": "ns",
            "range": "± 1385207.609353318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227422886.36666667,
            "unit": "ns",
            "range": "± 3283320.3005914576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67959.21978021978,
            "unit": "ns",
            "range": "± 7423.963116231111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 449093.3661971831,
            "unit": "ns",
            "range": "± 21941.758546687335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374513.29069767444,
            "unit": "ns",
            "range": "± 20167.418863612245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321642.484375,
            "unit": "ns",
            "range": "± 14866.349596226113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6327900.206896552,
            "unit": "ns",
            "range": "± 174349.79456302765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4640160.066666666,
            "unit": "ns",
            "range": "± 78564.66645060768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21377.21978021978,
            "unit": "ns",
            "range": "± 1816.9768958489371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104579.45360824742,
            "unit": "ns",
            "range": "± 7336.407543632162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108279.9175257732,
            "unit": "ns",
            "range": "± 11228.0357797922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 269356.43298969074,
            "unit": "ns",
            "range": "± 21102.991799598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.417582417583,
            "unit": "ns",
            "range": "± 705.2637657238454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21560.18085106383,
            "unit": "ns",
            "range": "± 2181.387818890435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1878599.8865979381,
            "unit": "ns",
            "range": "± 188222.65023336705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3559633.9024390243,
            "unit": "ns",
            "range": "± 120283.70408846016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3040226.83,
            "unit": "ns",
            "range": "± 266557.8103702742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7945315.595744681,
            "unit": "ns",
            "range": "± 300695.31161153666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3880668.153846154,
            "unit": "ns",
            "range": "± 58813.83940854703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4153288.269230769,
            "unit": "ns",
            "range": "± 107228.53007229287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5337387.675,
            "unit": "ns",
            "range": "± 189368.68147826014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5236677.220779221,
            "unit": "ns",
            "range": "± 267272.3212836155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10151295.67857143,
            "unit": "ns",
            "range": "± 283286.21230951324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7494605.830208333,
            "unit": "ns",
            "range": "± 40672.9086213377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2179130.707589286,
            "unit": "ns",
            "range": "± 4863.063780496216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456869.78046875,
            "unit": "ns",
            "range": "± 3909.3722680163696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127443.458854167,
            "unit": "ns",
            "range": "± 16367.28307675789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938437.0283203125,
            "unit": "ns",
            "range": "± 2933.9157256474077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852276.3244140625,
            "unit": "ns",
            "range": "± 2830.5140517565424"
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
          "id": "480aa31a0236c07694ec54dabd4afa2865ad5724",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:52:06+09:00",
          "tree_id": "5503b6b48e0c4ca4a169424b9b53cb78ec9d22db",
          "url": "https://github.com/greymistcube/libplanet/commit/480aa31a0236c07694ec54dabd4afa2865ad5724"
        },
        "date": 1680595947438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8114419.212121212,
            "unit": "ns",
            "range": "± 250989.45188901338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20293667,
            "unit": "ns",
            "range": "± 416037.4945447684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52654188.241935484,
            "unit": "ns",
            "range": "± 1551154.2441187676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109722602.47916667,
            "unit": "ns",
            "range": "± 4275439.582511285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228015323.82954547,
            "unit": "ns",
            "range": "± 17817962.897149052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71953.95652173914,
            "unit": "ns",
            "range": "± 8011.773702198018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414702.55670103093,
            "unit": "ns",
            "range": "± 53526.83436058985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366896.95652173914,
            "unit": "ns",
            "range": "± 42201.458233336765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342559.73626373627,
            "unit": "ns",
            "range": "± 41844.24916224323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5843574.989690722,
            "unit": "ns",
            "range": "± 411260.5887407463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4098072.870967742,
            "unit": "ns",
            "range": "± 121248.24480454468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21858.274193548386,
            "unit": "ns",
            "range": "± 4704.365320425534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121567.90217391304,
            "unit": "ns",
            "range": "± 25877.47009436646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124997.32967032967,
            "unit": "ns",
            "range": "± 15758.68268539597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 263452.0894736842,
            "unit": "ns",
            "range": "± 35834.949612252196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8308.887755102041,
            "unit": "ns",
            "range": "± 1663.6282398002527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23468.58510638298,
            "unit": "ns",
            "range": "± 4810.651413783489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609820.8578947368,
            "unit": "ns",
            "range": "± 164518.28707051152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991561.1304347827,
            "unit": "ns",
            "range": "± 114491.57787081666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728250.43877551,
            "unit": "ns",
            "range": "± 308278.7980502394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6801233.360655738,
            "unit": "ns",
            "range": "± 306998.0330899006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306101.512820513,
            "unit": "ns",
            "range": "± 106467.13954373354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3652897.3421052634,
            "unit": "ns",
            "range": "± 362563.6928168127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4634518.63253012,
            "unit": "ns",
            "range": "± 246614.686937611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4909525.11,
            "unit": "ns",
            "range": "± 494539.0772643683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9731229.154639175,
            "unit": "ns",
            "range": "± 792468.4119466573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7656140.3186848955,
            "unit": "ns",
            "range": "± 300040.22372968396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2208761.73984375,
            "unit": "ns",
            "range": "± 88925.29373703468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428110.1889648438,
            "unit": "ns",
            "range": "± 27686.435804576344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3105690.0370623115,
            "unit": "ns",
            "range": "± 165701.60263244936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919723.2505001905,
            "unit": "ns",
            "range": "± 33165.36883855806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804014.3663194445,
            "unit": "ns",
            "range": "± 33654.1644379977"
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
          "id": "065b9547bba5f11d2ab78eb4e5527130aa4e6322",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T17:08:47+09:00",
          "tree_id": "7aef8e6de3de38f753c5cd5fcc741ff6b981714e",
          "url": "https://github.com/greymistcube/libplanet/commit/065b9547bba5f11d2ab78eb4e5527130aa4e6322"
        },
        "date": 1680597058063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9414413.681818182,
            "unit": "ns",
            "range": "± 1126025.7877866174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23829158.31707317,
            "unit": "ns",
            "range": "± 5167902.35481172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51613286.327586204,
            "unit": "ns",
            "range": "± 1363002.1457849704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107652255.32857142,
            "unit": "ns",
            "range": "± 5213695.624643411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250015096.0967742,
            "unit": "ns",
            "range": "± 24028790.470015693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77521.48863636363,
            "unit": "ns",
            "range": "± 9556.202799354884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 504515.8144329897,
            "unit": "ns",
            "range": "± 87162.24254447491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358535.867816092,
            "unit": "ns",
            "range": "± 27728.851031268878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302086.98913043475,
            "unit": "ns",
            "range": "± 35326.64914125497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5444686.730769231,
            "unit": "ns",
            "range": "± 48257.978178317564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4027608.523255814,
            "unit": "ns",
            "range": "± 124276.85671161182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22893.125,
            "unit": "ns",
            "range": "± 3412.7619444481743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116916.46875,
            "unit": "ns",
            "range": "± 18813.195786022738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139423.5804597701,
            "unit": "ns",
            "range": "± 15957.929734889909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 267252.59411764704,
            "unit": "ns",
            "range": "± 31373.34603859944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10262.412087912087,
            "unit": "ns",
            "range": "± 1345.1475643822018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28605.565217391304,
            "unit": "ns",
            "range": "± 5548.183395014169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652252.59,
            "unit": "ns",
            "range": "± 183035.9453174276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104029.85,
            "unit": "ns",
            "range": "± 133444.10020753054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2724543.61,
            "unit": "ns",
            "range": "± 248815.49911014832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6872850.756756756,
            "unit": "ns",
            "range": "± 220640.21633638543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5248138.311111111,
            "unit": "ns",
            "range": "± 1861257.608681223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4181695.094736842,
            "unit": "ns",
            "range": "± 565480.2206957822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4983666.691489362,
            "unit": "ns",
            "range": "± 469789.1422173259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5461102.926315789,
            "unit": "ns",
            "range": "± 882301.8737239616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10523374.532258065,
            "unit": "ns",
            "range": "± 1044264.1311510416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7699002.230271464,
            "unit": "ns",
            "range": "± 584192.3895031215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2039077.5899286685,
            "unit": "ns",
            "range": "± 49644.34474589449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447613.5100835755,
            "unit": "ns",
            "range": "± 49654.0333697227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3178680.7892597853,
            "unit": "ns",
            "range": "± 219949.8581222781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803660.5519670759,
            "unit": "ns",
            "range": "± 8535.72730942306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735169.1437639509,
            "unit": "ns",
            "range": "± 10325.19468034843"
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
          "id": "a54cfa7f4a65c52d69e47bc4a79e3dbc5e66b7c0",
          "message": "Revert logic",
          "timestamp": "2023-04-04T17:26:07+09:00",
          "tree_id": "a0a3eb35d8de4442dd0c85c0b01ee9bc8f1a55cb",
          "url": "https://github.com/greymistcube/libplanet/commit/a54cfa7f4a65c52d69e47bc4a79e3dbc5e66b7c0"
        },
        "date": 1680597881330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8178265.692307692,
            "unit": "ns",
            "range": "± 68286.99670921326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20934465.304347824,
            "unit": "ns",
            "range": "± 805728.129062475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51697020.5625,
            "unit": "ns",
            "range": "± 955078.3626907946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113141671.94444445,
            "unit": "ns",
            "range": "± 4475034.372520766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218071666.29166666,
            "unit": "ns",
            "range": "± 5656022.20157993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74155.97826086957,
            "unit": "ns",
            "range": "± 6179.917420014893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 430969.1382978723,
            "unit": "ns",
            "range": "± 43493.39629533716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354221.09574468085,
            "unit": "ns",
            "range": "± 31649.551304662018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335277.01515151514,
            "unit": "ns",
            "range": "± 10178.030270886198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5912639.25,
            "unit": "ns",
            "range": "± 65257.65668922063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4339231.159574468,
            "unit": "ns",
            "range": "± 165833.3680839158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24691.077777777777,
            "unit": "ns",
            "range": "± 2904.1974088185298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111901.2311827957,
            "unit": "ns",
            "range": "± 12514.844694219344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123254.08988764045,
            "unit": "ns",
            "range": "± 7811.396305515959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 270925.5,
            "unit": "ns",
            "range": "± 3554.5967550355263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7887.219780219781,
            "unit": "ns",
            "range": "± 1031.575254993792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20370.724489795917,
            "unit": "ns",
            "range": "± 3714.6120075467584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648006.2708333333,
            "unit": "ns",
            "range": "± 207057.17920335964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3099679.272727273,
            "unit": "ns",
            "range": "± 75398.3662655718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578333.144329897,
            "unit": "ns",
            "range": "± 232896.4552411557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6918543.286666667,
            "unit": "ns",
            "range": "± 348448.0817477456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3698336.6263157893,
            "unit": "ns",
            "range": "± 234690.43596266457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3672467.419354839,
            "unit": "ns",
            "range": "± 161300.73458305877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4781810.225,
            "unit": "ns",
            "range": "± 234787.48942567082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5129912.730337079,
            "unit": "ns",
            "range": "± 567507.2774173305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9616618.149253732,
            "unit": "ns",
            "range": "± 453149.1551315773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7051365.7702414775,
            "unit": "ns",
            "range": "± 262238.5934111234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927147.6108774038,
            "unit": "ns",
            "range": "± 11274.436262344894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289974.3053850445,
            "unit": "ns",
            "range": "± 8935.71558099972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2823087.1953125,
            "unit": "ns",
            "range": "± 70086.69056431158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856192.0456891741,
            "unit": "ns",
            "range": "± 7331.481377435962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731685.5646033654,
            "unit": "ns",
            "range": "± 4056.685574876002"
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
          "id": "d03672cbbf35c6aedf46d26a44b568d4e23d6e35",
          "message": "Revert logic",
          "timestamp": "2023-04-05T10:14:09+09:00",
          "tree_id": "a3c48c096313c865f71392128948bff85e69cd83",
          "url": "https://github.com/greymistcube/libplanet/commit/d03672cbbf35c6aedf46d26a44b568d4e23d6e35"
        },
        "date": 1680658313292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9146574.833333334,
            "unit": "ns",
            "range": "± 430875.5715821281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21738547.744897958,
            "unit": "ns",
            "range": "± 1631225.1963767277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55888596.60843374,
            "unit": "ns",
            "range": "± 2982203.5883036996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110532831.9787234,
            "unit": "ns",
            "range": "± 4266262.588018125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225080529.8882353,
            "unit": "ns",
            "range": "± 12109721.221420791"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71932.3829787234,
            "unit": "ns",
            "range": "± 10174.637128195769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395625.10869565216,
            "unit": "ns",
            "range": "± 31466.83699764575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338681.40860215056,
            "unit": "ns",
            "range": "± 35965.94004968196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313099.1182795699,
            "unit": "ns",
            "range": "± 29183.616657910272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5914484.636363637,
            "unit": "ns",
            "range": "± 441933.5575469939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4241415.186813187,
            "unit": "ns",
            "range": "± 236995.56636804235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20598.854838709678,
            "unit": "ns",
            "range": "± 3906.7108528707736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101361.56185567011,
            "unit": "ns",
            "range": "± 14486.254207879298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102740.18181818182,
            "unit": "ns",
            "range": "± 13406.033964617664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239428.75531914894,
            "unit": "ns",
            "range": "± 16318.099466138801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7391.6752577319585,
            "unit": "ns",
            "range": "± 1613.9109138099218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23385.217391304348,
            "unit": "ns",
            "range": "± 3259.998428591568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642021.3737373736,
            "unit": "ns",
            "range": "± 197602.07839548658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981806.7454545456,
            "unit": "ns",
            "range": "± 125207.1045714109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2602616.368686869,
            "unit": "ns",
            "range": "± 234986.12860287793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6718923.5,
            "unit": "ns",
            "range": "± 222146.68211217097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438424.011627907,
            "unit": "ns",
            "range": "± 213294.13872555507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3658470.387640449,
            "unit": "ns",
            "range": "± 296274.60686093377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548013.402597402,
            "unit": "ns",
            "range": "± 225075.63371893571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5236094.414893617,
            "unit": "ns",
            "range": "± 572967.3785956465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9891807.031914894,
            "unit": "ns",
            "range": "± 899410.4523431453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6913620.561383928,
            "unit": "ns",
            "range": "± 122182.99982578066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916182.337890625,
            "unit": "ns",
            "range": "± 27387.33243079758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297554.0740685095,
            "unit": "ns",
            "range": "± 8047.770802154231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2808363.1552734375,
            "unit": "ns",
            "range": "± 34765.283620886854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791051.8079176683,
            "unit": "ns",
            "range": "± 2836.766729959305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729032.0245768229,
            "unit": "ns",
            "range": "± 4592.444218490751"
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
          "id": "3d40dfd2b845c3fd17184cec15d4c4649234121b",
          "message": "Revert logic",
          "timestamp": "2023-04-05T11:59:06+09:00",
          "tree_id": "d5695dc031f3ab84fe5407544e7651a49e6b3c70",
          "url": "https://github.com/greymistcube/libplanet/commit/3d40dfd2b845c3fd17184cec15d4c4649234121b"
        },
        "date": 1680664396119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7628274.285714285,
            "unit": "ns",
            "range": "± 84657.56370717955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18550731.5,
            "unit": "ns",
            "range": "± 442155.5735165912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47084560.166666664,
            "unit": "ns",
            "range": "± 1203457.041644527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92091944.92857143,
            "unit": "ns",
            "range": "± 1255861.4445101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194552033.84615386,
            "unit": "ns",
            "range": "± 2041895.4514906341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56128.854838709674,
            "unit": "ns",
            "range": "± 6812.348481992991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363196.04929577466,
            "unit": "ns",
            "range": "± 17784.54310171675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301742.15789473685,
            "unit": "ns",
            "range": "± 13096.447500575809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268621.0375,
            "unit": "ns",
            "range": "± 13883.170670251642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5231393.153846154,
            "unit": "ns",
            "range": "± 75672.62205144622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835171.5833333335,
            "unit": "ns",
            "range": "± 96248.32178408944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16919.34117647059,
            "unit": "ns",
            "range": "± 1385.94998838635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85444.3894736842,
            "unit": "ns",
            "range": "± 8059.883135331873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80648.48837209302,
            "unit": "ns",
            "range": "± 5546.526630125083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219591.11538461538,
            "unit": "ns",
            "range": "± 18471.533801302197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.988636363636,
            "unit": "ns",
            "range": "± 619.8784733384956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16989.571428571428,
            "unit": "ns",
            "range": "± 1444.4101229133655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574055.1935483871,
            "unit": "ns",
            "range": "± 184390.04583286142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2859567.5897435895,
            "unit": "ns",
            "range": "± 145844.73634366848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2496629.1041666665,
            "unit": "ns",
            "range": "± 256612.62638063624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6576293.482758621,
            "unit": "ns",
            "range": "± 260128.61094908023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3077735.5125,
            "unit": "ns",
            "range": "± 160218.14979741268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3246109.533333333,
            "unit": "ns",
            "range": "± 138145.348835555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251221.510204081,
            "unit": "ns",
            "range": "± 153758.66210519685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4303752.076923077,
            "unit": "ns",
            "range": "± 242100.02153638122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8712195.788135594,
            "unit": "ns",
            "range": "± 382677.449578761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6128272.157924107,
            "unit": "ns",
            "range": "± 53521.58044217754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895279.8380208334,
            "unit": "ns",
            "range": "± 8873.549720994984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232796.537388393,
            "unit": "ns",
            "range": "± 6192.382433189995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2406723.14609375,
            "unit": "ns",
            "range": "± 14817.53658086687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 749389.3917317708,
            "unit": "ns",
            "range": "± 5761.29661795309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698015.0406901041,
            "unit": "ns",
            "range": "± 5555.163414070091"
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
          "id": "ed8b6f936ff5b507eeb1d78a90bd6b3dcd80c09f",
          "message": "Remove special treatment for self proposed block",
          "timestamp": "2023-04-05T13:41:21+09:00",
          "tree_id": "7bc319be35283a9fdc87e682163f22705b826c5f",
          "url": "https://github.com/greymistcube/libplanet/commit/ed8b6f936ff5b507eeb1d78a90bd6b3dcd80c09f"
        },
        "date": 1680670593988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7414462.05882353,
            "unit": "ns",
            "range": "± 118634.50292414438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19159705.65,
            "unit": "ns",
            "range": "± 436502.47226215835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46437406.28571428,
            "unit": "ns",
            "range": "± 685591.5447189135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93938928.16666667,
            "unit": "ns",
            "range": "± 1366636.4903563508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190602445.07692307,
            "unit": "ns",
            "range": "± 2251494.3871441423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55954.994505494506,
            "unit": "ns",
            "range": "± 6245.788720540917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380432.49122807017,
            "unit": "ns",
            "range": "± 16074.932467224071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334746.652173913,
            "unit": "ns",
            "range": "± 12722.9869640521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328417.5833333333,
            "unit": "ns",
            "range": "± 7260.189253232564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5597721.214285715,
            "unit": "ns",
            "range": "± 70670.20238504243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162556.9210526315,
            "unit": "ns",
            "range": "± 91686.41945258352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25029.726315789474,
            "unit": "ns",
            "range": "± 2663.3243042919175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118405.5425531915,
            "unit": "ns",
            "range": "± 9215.848433120836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123257.86956521739,
            "unit": "ns",
            "range": "± 4757.469185320632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252804.34210526315,
            "unit": "ns",
            "range": "± 23054.639337570265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10470.726804123711,
            "unit": "ns",
            "range": "± 1053.039168165516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23818.270833333332,
            "unit": "ns",
            "range": "± 2947.6488596102154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481824.2083333333,
            "unit": "ns",
            "range": "± 144200.31761063763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921143.8255813955,
            "unit": "ns",
            "range": "± 256046.89958595668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2490877.4895833335,
            "unit": "ns",
            "range": "± 234522.10473323223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6463224.9,
            "unit": "ns",
            "range": "± 259873.680368453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3080351.907407407,
            "unit": "ns",
            "range": "± 85941.87627302324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3287603.8333333335,
            "unit": "ns",
            "range": "± 100403.45439982848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4208900.074468086,
            "unit": "ns",
            "range": "± 160684.67073605407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312087.056818182,
            "unit": "ns",
            "range": "± 303160.080575072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8482593.045454545,
            "unit": "ns",
            "range": "± 356328.8792394847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6348916.882291666,
            "unit": "ns",
            "range": "± 57413.689791820936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002140.7907652243,
            "unit": "ns",
            "range": "± 65391.19339808304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295246.0785435268,
            "unit": "ns",
            "range": "± 5292.824627767104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547329.09765625,
            "unit": "ns",
            "range": "± 39500.07352376048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893797.4695638021,
            "unit": "ns",
            "range": "± 18265.749141201213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715140.1453125,
            "unit": "ns",
            "range": "± 5989.633510314894"
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
          "id": "f328cbab3729a7d8a8b6a00aaea2778178c28405",
          "message": "Changed test",
          "timestamp": "2023-04-05T14:22:46+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/f328cbab3729a7d8a8b6a00aaea2778178c28405"
        },
        "date": 1680673277976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7528518.269230769,
            "unit": "ns",
            "range": "± 203513.00059220937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19585004.65,
            "unit": "ns",
            "range": "± 426950.8879128932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48848242.23611111,
            "unit": "ns",
            "range": "± 2397566.663201581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106247471.09589042,
            "unit": "ns",
            "range": "± 5230778.112780417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208365938.66666666,
            "unit": "ns",
            "range": "± 4327474.18633137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70827.34831460674,
            "unit": "ns",
            "range": "± 9194.466517843914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 436136.20652173914,
            "unit": "ns",
            "range": "± 42350.87861318261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322296.8314606742,
            "unit": "ns",
            "range": "± 25741.91517175651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297327.7626262626,
            "unit": "ns",
            "range": "± 32134.567959291493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5680436.615384615,
            "unit": "ns",
            "range": "± 80675.63418151569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046153.153846154,
            "unit": "ns",
            "range": "± 62262.690186882326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19080.21052631579,
            "unit": "ns",
            "range": "± 2317.4741656378083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94950.30526315789,
            "unit": "ns",
            "range": "± 12167.289570439647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95611.92708333333,
            "unit": "ns",
            "range": "± 14199.333664680995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 237123.2365591398,
            "unit": "ns",
            "range": "± 15596.298796159417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6795.955555555555,
            "unit": "ns",
            "range": "± 763.076459731104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16246.934065934065,
            "unit": "ns",
            "range": "± 1457.434311858402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634477.202020202,
            "unit": "ns",
            "range": "± 190364.3132941108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3065425.7282608696,
            "unit": "ns",
            "range": "± 178071.93513815824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2585451.586956522,
            "unit": "ns",
            "range": "± 219738.04569268043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7191088.668421052,
            "unit": "ns",
            "range": "± 514349.47150482284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332896.1153846155,
            "unit": "ns",
            "range": "± 90245.27160946526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3382277.6470588236,
            "unit": "ns",
            "range": "± 133603.08233956632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4414640.618181818,
            "unit": "ns",
            "range": "± 172821.1831762113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4488749.888888889,
            "unit": "ns",
            "range": "± 224709.32570567695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9092621.915384615,
            "unit": "ns",
            "range": "± 419512.50666156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6514189.284598215,
            "unit": "ns",
            "range": "± 43510.58122453213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034224.722935268,
            "unit": "ns",
            "range": "± 33970.660109969955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338355.7992061493,
            "unit": "ns",
            "range": "± 40408.13446895846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612422.226034628,
            "unit": "ns",
            "range": "± 129858.19471125121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793597.4169270833,
            "unit": "ns",
            "range": "± 11988.100479426053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721776.7073800223,
            "unit": "ns",
            "range": "± 7241.095832141566"
          }
        ]
      }
    ]
  }
}