window.BENCHMARK_DATA = {
  "lastUpdate": 1699884086422,
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
      }
    ]
  }
}