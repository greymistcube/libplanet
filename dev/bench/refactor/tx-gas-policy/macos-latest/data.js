window.BENCHMARK_DATA = {
  "lastUpdate": 1703045618303,
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
          "id": "10880c93f390657fae7c733fbce4e26ddeaa2281",
          "message": "More strict conditions for TxInvoice gas arguments",
          "timestamp": "2023-12-20T11:35:28+09:00",
          "tree_id": "ecc9df8922443ee164d6e95078e2f2b4ec6240b4",
          "url": "https://github.com/greymistcube/libplanet/commit/10880c93f390657fae7c733fbce4e26ddeaa2281"
        },
        "date": 1703040949792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9091327.34,
            "unit": "ns",
            "range": "± 1579498.2524798256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24075839.95,
            "unit": "ns",
            "range": "± 3549972.3621425987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69542633.20833333,
            "unit": "ns",
            "range": "± 3397983.693865492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149724922.20833334,
            "unit": "ns",
            "range": "± 5502746.017224812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248036727.71,
            "unit": "ns",
            "range": "± 42301212.29151972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39993.42307692308,
            "unit": "ns",
            "range": "± 5554.333223770767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366647.0786516854,
            "unit": "ns",
            "range": "± 31762.201318485728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343889.5056179775,
            "unit": "ns",
            "range": "± 19031.54922402392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309451.9130434783,
            "unit": "ns",
            "range": "± 23837.45238717923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5468504.573684211,
            "unit": "ns",
            "range": "± 518627.81079257076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5068722.283783784,
            "unit": "ns",
            "range": "± 168940.78583422446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24606.24742268041,
            "unit": "ns",
            "range": "± 3187.832695156852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96709.8125,
            "unit": "ns",
            "range": "± 13213.349269274695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93701.4387755102,
            "unit": "ns",
            "range": "± 16715.134556860285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97846.5,
            "unit": "ns",
            "range": "± 16446.256753371028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7690.436842105263,
            "unit": "ns",
            "range": "± 1329.0415744463912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18064.78888888889,
            "unit": "ns",
            "range": "± 1555.5265393049062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297021.4595959596,
            "unit": "ns",
            "range": "± 166984.67815487788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536554.8541666665,
            "unit": "ns",
            "range": "± 247168.81345198615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702750.8673469387,
            "unit": "ns",
            "range": "± 148470.55378793337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8236730.113636363,
            "unit": "ns",
            "range": "± 604263.7468130442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2849483.327586207,
            "unit": "ns",
            "range": "± 108397.20373362034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3023010.5208333335,
            "unit": "ns",
            "range": "± 117988.81259236828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073531.76,
            "unit": "ns",
            "range": "± 535206.3967368786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3839332.74,
            "unit": "ns",
            "range": "± 486611.0795599058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16802943.691919193,
            "unit": "ns",
            "range": "± 4282783.004319544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244919.9456380205,
            "unit": "ns",
            "range": "± 244737.2766987955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1671759.67265625,
            "unit": "ns",
            "range": "± 279400.10159943724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 903495.4282588252,
            "unit": "ns",
            "range": "± 37640.17139092395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2077317.5287224264,
            "unit": "ns",
            "range": "± 98379.1891276759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631686.5370361328,
            "unit": "ns",
            "range": "± 22279.40450259121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586817.8977801984,
            "unit": "ns",
            "range": "± 23819.68155678021"
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
          "id": "1949f2d921126fc7b862cc81fa512f99d9bf4d3e",
          "message": "Changelog",
          "timestamp": "2023-12-20T11:38:02+09:00",
          "tree_id": "7a7f633582caf555a3d76b65bedf802a0b01264d",
          "url": "https://github.com/greymistcube/libplanet/commit/1949f2d921126fc7b862cc81fa512f99d9bf4d3e"
        },
        "date": 1703040983312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7693792.466666667,
            "unit": "ns",
            "range": "± 133224.08787928204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19050538.92105263,
            "unit": "ns",
            "range": "± 611628.0178321329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46945173.23076923,
            "unit": "ns",
            "range": "± 685179.8114558633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95575023.56521739,
            "unit": "ns",
            "range": "± 2350624.2751057125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192938277.2631579,
            "unit": "ns",
            "range": "± 3981387.0071405577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41247.5,
            "unit": "ns",
            "range": "± 10364.228655767503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217551.87096774194,
            "unit": "ns",
            "range": "± 12591.608030252431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208159.71212121213,
            "unit": "ns",
            "range": "± 8643.361291526046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194120.44897959183,
            "unit": "ns",
            "range": "± 16992.220945547953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3696479.5714285714,
            "unit": "ns",
            "range": "± 43698.906582807846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540360.4814814813,
            "unit": "ns",
            "range": "± 96405.28287805457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12857.583333333334,
            "unit": "ns",
            "range": "± 1239.0167031005874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60498.333333333336,
            "unit": "ns",
            "range": "± 7768.50987240675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52852.36842105263,
            "unit": "ns",
            "range": "± 1822.9196387241232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61126.854166666664,
            "unit": "ns",
            "range": "± 10959.993881077015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3834.717391304348,
            "unit": "ns",
            "range": "± 956.6023244623369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12498.244444444445,
            "unit": "ns",
            "range": "± 1236.9435174728987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309841.0526315789,
            "unit": "ns",
            "range": "± 217025.55701455055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2454943.510638298,
            "unit": "ns",
            "range": "± 184332.7297904377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702337.7872340425,
            "unit": "ns",
            "range": "± 148613.84012227706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7514803.989583333,
            "unit": "ns",
            "range": "± 841744.7305509769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2900094.282051282,
            "unit": "ns",
            "range": "± 100331.70935713005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3019941.9393939395,
            "unit": "ns",
            "range": "± 91979.62505051709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3618695.8220338984,
            "unit": "ns",
            "range": "± 158190.6951103571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3393826.836734694,
            "unit": "ns",
            "range": "± 135150.53558491528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12990456.125,
            "unit": "ns",
            "range": "± 1712059.8676064492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937988.622884114,
            "unit": "ns",
            "range": "± 192966.21380684132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1565803.8084292763,
            "unit": "ns",
            "range": "± 105413.12849873869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023196.8788452148,
            "unit": "ns",
            "range": "± 71349.19167143646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2377832.7768806377,
            "unit": "ns",
            "range": "± 218621.2459928793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 734539.9621322308,
            "unit": "ns",
            "range": "± 46198.649619984455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 646387.6570231119,
            "unit": "ns",
            "range": "± 16389.0883115332"
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
          "id": "f2b347d981a835fa5f3419cf160fd503a4b3f892",
          "message": "Remove unnecessary test",
          "timestamp": "2023-12-20T13:00:47+09:00",
          "tree_id": "e408a49df40a47b9b59e91767314eab8ddb4f697",
          "url": "https://github.com/greymistcube/libplanet/commit/f2b347d981a835fa5f3419cf160fd503a4b3f892"
        },
        "date": 1703045603546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113316.26,
            "unit": "ns",
            "range": "± 216627.31745813283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19731669.19354839,
            "unit": "ns",
            "range": "± 600434.83924999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49038459.95714286,
            "unit": "ns",
            "range": "± 1575035.4576596858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99406271.95348836,
            "unit": "ns",
            "range": "± 3623722.5969965043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203412872.28688523,
            "unit": "ns",
            "range": "± 9081713.440343823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46103.21428571428,
            "unit": "ns",
            "range": "± 10054.808941265905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244675.4255319149,
            "unit": "ns",
            "range": "± 18932.6924023479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229476.6923076923,
            "unit": "ns",
            "range": "± 12765.589816805967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218949.343373494,
            "unit": "ns",
            "range": "± 11143.902186334173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804653.076923077,
            "unit": "ns",
            "range": "± 52223.89764029098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3532381.6428571427,
            "unit": "ns",
            "range": "± 25933.53002050002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15219.65306122449,
            "unit": "ns",
            "range": "± 1933.4196527526885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66201.14583333333,
            "unit": "ns",
            "range": "± 6019.155975067682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72486.23,
            "unit": "ns",
            "range": "± 9138.919319060818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66458.01546391753,
            "unit": "ns",
            "range": "± 13399.323750126194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3054.320224719101,
            "unit": "ns",
            "range": "± 354.50335175354036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12003.45744680851,
            "unit": "ns",
            "range": "± 1109.5426129706384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018471.2373737374,
            "unit": "ns",
            "range": "± 75631.94739342734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2265196.4270833335,
            "unit": "ns",
            "range": "± 148663.77210667063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524758.1746987952,
            "unit": "ns",
            "range": "± 79211.16147009631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7128361.097826087,
            "unit": "ns",
            "range": "± 579831.4952879014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3027745.4385964912,
            "unit": "ns",
            "range": "± 123690.3094822794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3015349.7101449277,
            "unit": "ns",
            "range": "± 125186.68500332067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3762177.714285714,
            "unit": "ns",
            "range": "± 60444.55629166867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3564880.8863636362,
            "unit": "ns",
            "range": "± 195401.93954068827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13544476.505263157,
            "unit": "ns",
            "range": "± 2090422.8013743905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4260760.909114583,
            "unit": "ns",
            "range": "± 77645.76381940472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396295.565625,
            "unit": "ns",
            "range": "± 12000.682822863844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874040.9092447917,
            "unit": "ns",
            "range": "± 10137.447658440817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947370.0979817708,
            "unit": "ns",
            "range": "± 12792.223871679731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631444.8052884615,
            "unit": "ns",
            "range": "± 5877.502263234268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552086.1692057292,
            "unit": "ns",
            "range": "± 6145.409946613633"
          }
        ]
      }
    ]
  }
}