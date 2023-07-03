window.BENCHMARK_DATA = {
  "lastUpdate": 1688377391457,
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
          "id": "f791366a0dccda02042497e48ec7b9118bc9ffd7",
          "message": "Changelog",
          "timestamp": "2023-07-03T18:21:10+09:00",
          "tree_id": "0ff340aa0972ee9d0297222e1544e2fa14961ab4",
          "url": "https://github.com/greymistcube/libplanet/commit/f791366a0dccda02042497e48ec7b9118bc9ffd7"
        },
        "date": 1688377044627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10252034.780487806,
            "unit": "ns",
            "range": "± 362063.9563471841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27156715.846153848,
            "unit": "ns",
            "range": "± 255364.75514442936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69160116.73333333,
            "unit": "ns",
            "range": "± 660669.9346697223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136386519.53333333,
            "unit": "ns",
            "range": "± 969377.5657428598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276352799.6,
            "unit": "ns",
            "range": "± 2038012.0068229937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57524.15053763441,
            "unit": "ns",
            "range": "± 3954.2646404429383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350402.9459459459,
            "unit": "ns",
            "range": "± 10838.339358617286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327344.67441860464,
            "unit": "ns",
            "range": "± 12050.241972913183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312494.4186046512,
            "unit": "ns",
            "range": "± 16689.02623350771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5452214.35,
            "unit": "ns",
            "range": "± 122265.62293770368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4915168.538461538,
            "unit": "ns",
            "range": "± 47642.62961469029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23340.391304347828,
            "unit": "ns",
            "range": "± 1898.3090274977883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110534.23958333333,
            "unit": "ns",
            "range": "± 7210.320484511354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98091.76923076923,
            "unit": "ns",
            "range": "± 5030.378847428029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119312.5425531915,
            "unit": "ns",
            "range": "± 13360.823769485361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7246.336842105263,
            "unit": "ns",
            "range": "± 819.4187562512249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24581.322580645163,
            "unit": "ns",
            "range": "± 1914.8299116273574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830586.8387096773,
            "unit": "ns",
            "range": "± 103029.66382502476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3435246.9714285713,
            "unit": "ns",
            "range": "± 110469.47859569648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311128.035714286,
            "unit": "ns",
            "range": "± 124172.89291421638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6165232.586206896,
            "unit": "ns",
            "range": "± 176392.75070857347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217424.4375,
            "unit": "ns",
            "range": "± 35391.021531163744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2307197.978645833,
            "unit": "ns",
            "range": "± 9077.41159956574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1657243.53984375,
            "unit": "ns",
            "range": "± 7149.369793863113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3228090.7153645833,
            "unit": "ns",
            "range": "± 15504.274354497533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020964.2880208333,
            "unit": "ns",
            "range": "± 5038.9082207264755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932187.2559895833,
            "unit": "ns",
            "range": "± 2639.8795950282133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4390702,
            "unit": "ns",
            "range": "± 33534.92288396282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4684636.142857143,
            "unit": "ns",
            "range": "± 77522.55133518559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5490798.666666667,
            "unit": "ns",
            "range": "± 67059.37557724143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4984442.590909091,
            "unit": "ns",
            "range": "± 117303.07883738363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7993520.88,
            "unit": "ns",
            "range": "± 211998.44486542817"
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
          "id": "4eb356f93cfaee26859c79aa1416e4a1a8e498cb",
          "message": "Align TxResult nullability with TxSuccess",
          "timestamp": "2023-07-03T18:18:49+09:00",
          "tree_id": "e5e2c5e6b39c0cf7ee667f8c3115cbc0aac4ef71",
          "url": "https://github.com/greymistcube/libplanet/commit/4eb356f93cfaee26859c79aa1416e4a1a8e498cb"
        },
        "date": 1688377097998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9520970.013513513,
            "unit": "ns",
            "range": "± 472235.54958331975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25579039.39175258,
            "unit": "ns",
            "range": "± 1673180.4603845759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64362554.06,
            "unit": "ns",
            "range": "± 4855941.828084694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129025246.19387755,
            "unit": "ns",
            "range": "± 7891668.183268602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260812331.67676768,
            "unit": "ns",
            "range": "± 19461694.878818307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64995.81443298969,
            "unit": "ns",
            "range": "± 12049.418653274228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379815.83838383836,
            "unit": "ns",
            "range": "± 50361.150182944824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373989.0208333333,
            "unit": "ns",
            "range": "± 36231.02987015678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323707.2,
            "unit": "ns",
            "range": "± 26412.574084700183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6037820.546875,
            "unit": "ns",
            "range": "± 278338.0785398141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5134999,
            "unit": "ns",
            "range": "± 266410.2093600808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23576.79775280899,
            "unit": "ns",
            "range": "± 3282.156515227365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129220.19354838709,
            "unit": "ns",
            "range": "± 20426.79688240854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130097.63043478261,
            "unit": "ns",
            "range": "± 22646.571549328255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143700.05376344087,
            "unit": "ns",
            "range": "± 25821.88111574704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5809.712765957447,
            "unit": "ns",
            "range": "± 1277.910530988622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27896.42,
            "unit": "ns",
            "range": "± 10905.556252450104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1798186.0104166667,
            "unit": "ns",
            "range": "± 200608.78723627835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3354192.6774193547,
            "unit": "ns",
            "range": "± 259751.66890137005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274074.6836734693,
            "unit": "ns",
            "range": "± 263073.4997888353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6609538.410526316,
            "unit": "ns",
            "range": "± 455274.04449970234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7347093.946814904,
            "unit": "ns",
            "range": "± 91184.37708644423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2308177.6908052885,
            "unit": "ns",
            "range": "± 62987.47199080812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1681340.6135066105,
            "unit": "ns",
            "range": "± 45838.442265203616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3376212.544921875,
            "unit": "ns",
            "range": "± 53382.09148912016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1067999.0637428977,
            "unit": "ns",
            "range": "± 39608.019586745904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1007537.058984375,
            "unit": "ns",
            "range": "± 14159.143791423592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3740310.1836734693,
            "unit": "ns",
            "range": "± 241758.11669348853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4095094.9891304346,
            "unit": "ns",
            "range": "± 249091.9021972225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5523506.5121951215,
            "unit": "ns",
            "range": "± 290363.4166219574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4751067.142857143,
            "unit": "ns",
            "range": "± 218168.86558934982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8660070.833333334,
            "unit": "ns",
            "range": "± 384225.08497375646"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20ebf243bf70cb5dab6152dffd0a9b5438819b06",
          "message": "Update CHANGES.md\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-07-03T18:30:56+09:00",
          "tree_id": "08ef06cc2cee22baf60d1b4ccb2cbe34c8e7976f",
          "url": "https://github.com/greymistcube/libplanet/commit/20ebf243bf70cb5dab6152dffd0a9b5438819b06"
        },
        "date": 1688377383725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7657198.8,
            "unit": "ns",
            "range": "± 41731.4505211597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19491957.666666668,
            "unit": "ns",
            "range": "± 168670.12004233364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49646661.266666666,
            "unit": "ns",
            "range": "± 347085.09443310596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100119673.78571428,
            "unit": "ns",
            "range": "± 403288.0790811334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200067584.33333334,
            "unit": "ns",
            "range": "± 1281297.6981819011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45958.07058823529,
            "unit": "ns",
            "range": "± 2498.337131679672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275148.82857142854,
            "unit": "ns",
            "range": "± 8671.648874639817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263824.5833333333,
            "unit": "ns",
            "range": "± 6848.976457434553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230888.3076923077,
            "unit": "ns",
            "range": "± 2059.3128054691524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202519.066666666,
            "unit": "ns",
            "range": "± 41889.26958655687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3807346.066666667,
            "unit": "ns",
            "range": "± 33238.724237308044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15896.32584269663,
            "unit": "ns",
            "range": "± 1254.3045227542789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81929.75268817204,
            "unit": "ns",
            "range": "± 5393.81840962394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71306.46153846153,
            "unit": "ns",
            "range": "± 940.0123771689229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80685.04166666667,
            "unit": "ns",
            "range": "± 8929.059204189982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4523.875,
            "unit": "ns",
            "range": "± 503.37687565815776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15355.127659574468,
            "unit": "ns",
            "range": "± 979.6419494484679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337960.2739726028,
            "unit": "ns",
            "range": "± 57862.1558171901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589947.5,
            "unit": "ns",
            "range": "± 50705.5214205843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1785411.5454545454,
            "unit": "ns",
            "range": "± 115538.91799994232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4930087.622222222,
            "unit": "ns",
            "range": "± 186231.02649877075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003036.03515625,
            "unit": "ns",
            "range": "± 15685.652441385464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008667.3994791666,
            "unit": "ns",
            "range": "± 952.7209045043071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371553.2016927083,
            "unit": "ns",
            "range": "± 1324.277493947026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573357.9118303573,
            "unit": "ns",
            "range": "± 2310.9080967576415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806368.4965494792,
            "unit": "ns",
            "range": "± 615.3169886110983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730182.6567382812,
            "unit": "ns",
            "range": "± 431.1394926493019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3224013.05,
            "unit": "ns",
            "range": "± 49189.59286536662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357571.1304347827,
            "unit": "ns",
            "range": "± 81966.7041505293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243545.066666666,
            "unit": "ns",
            "range": "± 64892.02778403376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680024.565217391,
            "unit": "ns",
            "range": "± 141634.86341523126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6186305.714285715,
            "unit": "ns",
            "range": "± 141574.70617703674"
          }
        ]
      }
    ]
  }
}