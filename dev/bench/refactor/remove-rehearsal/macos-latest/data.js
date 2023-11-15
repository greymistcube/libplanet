window.BENCHMARK_DATA = {
  "lastUpdate": 1700049627726,
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
          "id": "4e657671079e61ee97e92a87749c25254b73e619",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:35:58+09:00",
          "tree_id": "ffc87d30a0b081f79f43c2ec82fa9d3e084c909c",
          "url": "https://github.com/greymistcube/libplanet/commit/4e657671079e61ee97e92a87749c25254b73e619"
        },
        "date": 1699883694824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9238947.234693877,
            "unit": "ns",
            "range": "± 1110602.0300333495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19676426.78787879,
            "unit": "ns",
            "range": "± 747891.4559521325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48863744.66071428,
            "unit": "ns",
            "range": "± 1948504.7094967866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100684073.93333334,
            "unit": "ns",
            "range": "± 6698533.907152197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209314683.02688172,
            "unit": "ns",
            "range": "± 13604549.765683003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51237.769230769234,
            "unit": "ns",
            "range": "± 11043.728630692447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242270.2,
            "unit": "ns",
            "range": "± 25579.934569343804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241286.83544303797,
            "unit": "ns",
            "range": "± 12293.964030170984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302805.693877551,
            "unit": "ns",
            "range": "± 81796.49706416027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112773.1931818184,
            "unit": "ns",
            "range": "± 459273.2325318444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3520838.375,
            "unit": "ns",
            "range": "± 136512.20779555975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18658.560606060608,
            "unit": "ns",
            "range": "± 4345.260607994815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89224.47727272728,
            "unit": "ns",
            "range": "± 7518.651675065935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80653.35483870968,
            "unit": "ns",
            "range": "± 11583.62278376821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84238.41208791209,
            "unit": "ns",
            "range": "± 11172.545716719425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5826.5,
            "unit": "ns",
            "range": "± 1672.9504648171621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15703.526315789473,
            "unit": "ns",
            "range": "± 3439.6995194165693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1182587.1444444444,
            "unit": "ns",
            "range": "± 113834.62022211756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2396854.3,
            "unit": "ns",
            "range": "± 127086.69888465907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847486.4888888889,
            "unit": "ns",
            "range": "± 218566.6616680186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9420940.195652174,
            "unit": "ns",
            "range": "± 2228192.959912247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021486.7439024393,
            "unit": "ns",
            "range": "± 159036.73921514704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3048057.287671233,
            "unit": "ns",
            "range": "± 150439.62693224588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4690879.694736842,
            "unit": "ns",
            "range": "± 1061130.3562381521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3831777.7359550563,
            "unit": "ns",
            "range": "± 355231.3789921751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11556257.213483145,
            "unit": "ns",
            "range": "± 1154034.9641247431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781799.162844422,
            "unit": "ns",
            "range": "± 286864.53182720207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1669977.532035277,
            "unit": "ns",
            "range": "± 343641.3789774478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 972614.8634548611,
            "unit": "ns",
            "range": "± 83229.08439668003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648286.4792557564,
            "unit": "ns",
            "range": "± 352304.5806104805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 674762.9096304086,
            "unit": "ns",
            "range": "± 17880.6221413632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581298.3723958334,
            "unit": "ns",
            "range": "± 6474.452104785004"
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
          "id": "e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb",
          "message": "More cleanup",
          "timestamp": "2023-11-13T22:30:12+09:00",
          "tree_id": "7a0fd03c1f94e4318c5ac397ab25ec869b9f15b8",
          "url": "https://github.com/greymistcube/libplanet/commit/e8ebec3c53e3cb079079bccb6ed4d9fed60ec2fb"
        },
        "date": 1699884048201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12166821.081395349,
            "unit": "ns",
            "range": "± 1795237.69104824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30208082.891304348,
            "unit": "ns",
            "range": "± 2775136.3042228697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 83232497.91666667,
            "unit": "ns",
            "range": "± 18986712.536143538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 169833976.95054945,
            "unit": "ns",
            "range": "± 39148809.45661377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 394424993.08064514,
            "unit": "ns",
            "range": "± 81673392.89212377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78371.21111111112,
            "unit": "ns",
            "range": "± 13819.776077060722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 477602.5268817204,
            "unit": "ns",
            "range": "± 139992.1158102648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 449247.793814433,
            "unit": "ns",
            "range": "± 108833.756852571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 448959.30412371136,
            "unit": "ns",
            "range": "± 109289.91452331416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7441887.784210526,
            "unit": "ns",
            "range": "± 1662835.1431852041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 7484990.774193549,
            "unit": "ns",
            "range": "± 1713505.321949425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31591.60989010989,
            "unit": "ns",
            "range": "± 7711.519222638516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141631.78260869565,
            "unit": "ns",
            "range": "± 33236.78315315434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139087.40721649484,
            "unit": "ns",
            "range": "± 24824.60684737461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129067.1313131313,
            "unit": "ns",
            "range": "± 25604.51751341598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10554.568181818182,
            "unit": "ns",
            "range": "± 2457.606287012725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34312.62222222222,
            "unit": "ns",
            "range": "± 8927.2756033617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1848092.108695652,
            "unit": "ns",
            "range": "± 447946.1035771916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4201367.65625,
            "unit": "ns",
            "range": "± 1078630.5865962084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3159941.5416666665,
            "unit": "ns",
            "range": "± 796237.5833614237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14692198.458333334,
            "unit": "ns",
            "range": "± 3823552.753639211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5874940.436170213,
            "unit": "ns",
            "range": "± 1510076.7143784065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6341903.572916667,
            "unit": "ns",
            "range": "± 1453531.2083781837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7381024.224489796,
            "unit": "ns",
            "range": "± 1919087.8775132417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7436877.064516129,
            "unit": "ns",
            "range": "± 2158073.591340574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24492464.76966292,
            "unit": "ns",
            "range": "± 6501030.030407857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 10528267.83462171,
            "unit": "ns",
            "range": "± 1914476.9038693123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3018677.2492598686,
            "unit": "ns",
            "range": "± 406576.1075748726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1787018.9490411931,
            "unit": "ns",
            "range": "± 134430.03801851365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2919334.945756392,
            "unit": "ns",
            "range": "± 245992.534935519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893394.506328125,
            "unit": "ns",
            "range": "± 23718.487110320806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772932.0040101396,
            "unit": "ns",
            "range": "± 101681.625565238"
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
          "id": "fdbad5642027d694244a1449b94edb94f098dc46",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:53:14+09:00",
          "tree_id": "ba2912dd11fe2a26c28195cddb7aeebcd4aaf042",
          "url": "https://github.com/greymistcube/libplanet/commit/fdbad5642027d694244a1449b94edb94f098dc46"
        },
        "date": 1699888711479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9180240.861702127,
            "unit": "ns",
            "range": "± 355200.4874080715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28026159.972527474,
            "unit": "ns",
            "range": "± 4494500.883525772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65763322.93406593,
            "unit": "ns",
            "range": "± 8600388.379854945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113301217.24175824,
            "unit": "ns",
            "range": "± 18424010.495846987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264222279.16494846,
            "unit": "ns",
            "range": "± 55457153.49054181"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76657.43956043955,
            "unit": "ns",
            "range": "± 17684.246976214476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276074.3488372093,
            "unit": "ns",
            "range": "± 33346.331554395976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305138.21276595746,
            "unit": "ns",
            "range": "± 67269.14154316409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235465.1947368421,
            "unit": "ns",
            "range": "± 18401.951832805316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4061753.212765957,
            "unit": "ns",
            "range": "± 239256.23512005951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085610.617647059,
            "unit": "ns",
            "range": "± 129115.50295504494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23717.13829787234,
            "unit": "ns",
            "range": "± 4903.193957620317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118723.8125,
            "unit": "ns",
            "range": "± 24716.692121258973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98959.81318681319,
            "unit": "ns",
            "range": "± 15704.264943647271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97976.6,
            "unit": "ns",
            "range": "± 25693.017104744256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8141.551546391753,
            "unit": "ns",
            "range": "± 1734.1328546948064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19459.294736842105,
            "unit": "ns",
            "range": "± 4929.44946404657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845009.9468085107,
            "unit": "ns",
            "range": "± 487527.16701506363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3928498.2191011235,
            "unit": "ns",
            "range": "± 937190.5897008331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2979270.042105263,
            "unit": "ns",
            "range": "± 777545.7228140503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14578779.45054945,
            "unit": "ns",
            "range": "± 4494760.768421314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4361501.683673469,
            "unit": "ns",
            "range": "± 1033689.066693711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4122708.3936170214,
            "unit": "ns",
            "range": "± 811731.2482248788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4709571.343434343,
            "unit": "ns",
            "range": "± 1275411.8724878896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3785530.6704545454,
            "unit": "ns",
            "range": "± 328385.54254457133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14523916.5,
            "unit": "ns",
            "range": "± 3023693.328210761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5335641.159752155,
            "unit": "ns",
            "range": "± 441439.5874254372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636106.5039263852,
            "unit": "ns",
            "range": "± 255683.36733275867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1026594.6219805137,
            "unit": "ns",
            "range": "± 55948.30703529794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498541.8103412827,
            "unit": "ns",
            "range": "± 126995.41598991722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 730790.6148963341,
            "unit": "ns",
            "range": "± 12047.59822354497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 649467.7052217372,
            "unit": "ns",
            "range": "± 12634.0858904827"
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
          "id": "940516c5d078a4221f7e79310c434d6ce092693c",
          "message": "Cleanup",
          "timestamp": "2023-11-15T20:41:24+09:00",
          "tree_id": "bc7fab57fc5bef2010e0d6fbf18063c358077a44",
          "url": "https://github.com/greymistcube/libplanet/commit/940516c5d078a4221f7e79310c434d6ce092693c"
        },
        "date": 1700049710242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933126.466666667,
            "unit": "ns",
            "range": "± 148238.97073204213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19845231.201754387,
            "unit": "ns",
            "range": "± 858382.5016219869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49863996.27027027,
            "unit": "ns",
            "range": "± 1670417.6215308097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105996005.65384616,
            "unit": "ns",
            "range": "± 6485027.635578442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219874393.7747253,
            "unit": "ns",
            "range": "± 17548216.688528884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49303.1978021978,
            "unit": "ns",
            "range": "± 12348.572339631259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239714.74468085106,
            "unit": "ns",
            "range": "± 17961.36554767863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232372.57777777777,
            "unit": "ns",
            "range": "± 17925.498655548257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318065.17346938775,
            "unit": "ns",
            "range": "± 71974.22871868798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4089122.9827586208,
            "unit": "ns",
            "range": "± 299492.13451534073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634658.4166666665,
            "unit": "ns",
            "range": "± 33354.59399858746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23119.166666666668,
            "unit": "ns",
            "range": "± 5033.241043652566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95813.57894736843,
            "unit": "ns",
            "range": "± 21270.315905374922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82719.65934065935,
            "unit": "ns",
            "range": "± 10126.269021400372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81064.61538461539,
            "unit": "ns",
            "range": "± 13592.639581585021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.428571428572,
            "unit": "ns",
            "range": "± 1892.2643665697692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20355.55319148936,
            "unit": "ns",
            "range": "± 3378.3414637255573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084511.5894736843,
            "unit": "ns",
            "range": "± 81413.06099074562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2311124.6304347827,
            "unit": "ns",
            "range": "± 133495.06505228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714791.6354166667,
            "unit": "ns",
            "range": "± 141078.3917620659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7629339.95,
            "unit": "ns",
            "range": "± 473221.8087597994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992337.404494382,
            "unit": "ns",
            "range": "± 181968.00727979623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3048183.621212121,
            "unit": "ns",
            "range": "± 141792.77405951536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3666223.230769231,
            "unit": "ns",
            "range": "± 145386.4820940076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3652096.2209302327,
            "unit": "ns",
            "range": "± 259469.34137583466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11619585.08064516,
            "unit": "ns",
            "range": "± 1559022.7014955927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4946935.742708334,
            "unit": "ns",
            "range": "± 418741.6668309296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473873.8252130682,
            "unit": "ns",
            "range": "± 61868.73474474026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 956081.1770833334,
            "unit": "ns",
            "range": "± 50162.20657274295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2718543.8654336734,
            "unit": "ns",
            "range": "± 511357.1512032589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648639.982328869,
            "unit": "ns",
            "range": "± 15203.753697274698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603691.2899639423,
            "unit": "ns",
            "range": "± 7443.3782242506395"
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
          "id": "792befc69c0157a5a6eb4cca987b6fefeebbf8b3",
          "message": "Cleanup",
          "timestamp": "2023-11-15T20:42:41+09:00",
          "tree_id": "1d836628c15c8b224767dd18173fc31e3b974e69",
          "url": "https://github.com/greymistcube/libplanet/commit/792befc69c0157a5a6eb4cca987b6fefeebbf8b3"
        },
        "date": 1700049612497,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9081191.931578947,
            "unit": "ns",
            "range": "± 510911.7421660642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22954965.253086418,
            "unit": "ns",
            "range": "± 1178019.2769964284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56586443.511627905,
            "unit": "ns",
            "range": "± 2096109.612012356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110999792.63333334,
            "unit": "ns",
            "range": "± 3300921.9223329187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267588920.72727272,
            "unit": "ns",
            "range": "± 6414299.0631134445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74207.4010989011,
            "unit": "ns",
            "range": "± 6713.204695978656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336432.51123595505,
            "unit": "ns",
            "range": "± 24873.57318452219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326968.5169491525,
            "unit": "ns",
            "range": "± 14346.331332664959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307662.76666666666,
            "unit": "ns",
            "range": "± 5511.742950499502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4125845.4166666665,
            "unit": "ns",
            "range": "± 106332.55075670636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3704452.153846154,
            "unit": "ns",
            "range": "± 52026.957042873706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24823.275510204083,
            "unit": "ns",
            "range": "± 3167.87287093475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111995.96907216495,
            "unit": "ns",
            "range": "± 8215.92816253588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112887.84736842105,
            "unit": "ns",
            "range": "± 7423.859258697266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111768.63333333333,
            "unit": "ns",
            "range": "± 9657.619118800463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8388.809278350516,
            "unit": "ns",
            "range": "± 1019.7977368987679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24882.93181818182,
            "unit": "ns",
            "range": "± 3206.6542767299097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586190.4646464647,
            "unit": "ns",
            "range": "± 241232.26441392893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2967712.3978494625,
            "unit": "ns",
            "range": "± 207837.2145155674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2484850.8105263156,
            "unit": "ns",
            "range": "± 364120.6014873893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10609948.777777778,
            "unit": "ns",
            "range": "± 400235.2253827451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538396.6938775512,
            "unit": "ns",
            "range": "± 333793.4084916019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653436.4795918367,
            "unit": "ns",
            "range": "± 384808.04445393075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4525007.7727272725,
            "unit": "ns",
            "range": "± 311511.23447840783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4560326.154639175,
            "unit": "ns",
            "range": "± 404307.7069990891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16300826.770833334,
            "unit": "ns",
            "range": "± 2033592.3103363737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6983263.346235796,
            "unit": "ns",
            "range": "± 170991.4826622424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890574.4315104166,
            "unit": "ns",
            "range": "± 20989.50332492109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145033.9057291667,
            "unit": "ns",
            "range": "± 18838.408164797846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3351614.351692708,
            "unit": "ns",
            "range": "± 48118.51122146099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833537.1676432291,
            "unit": "ns",
            "range": "± 10960.417304992037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804279.2483956473,
            "unit": "ns",
            "range": "± 13550.918877282455"
          }
        ]
      }
    ]
  }
}