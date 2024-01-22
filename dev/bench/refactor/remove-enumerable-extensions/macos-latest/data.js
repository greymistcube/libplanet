window.BENCHMARK_DATA = {
  "lastUpdate": 1705903628916,
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
          "id": "2492963ab81141a40d92fca3e8a1b7cf63e3d07e",
          "message": "Removed EnumerableExtensions",
          "timestamp": "2024-01-22T14:45:02+09:00",
          "tree_id": "5f0010686140c2cef7ccc8649fdd5c2f99f01253",
          "url": "https://github.com/greymistcube/libplanet/commit/2492963ab81141a40d92fca3e8a1b7cf63e3d07e"
        },
        "date": 1705903341366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7993566.8,
            "unit": "ns",
            "range": "± 204262.08571791617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20122409.6,
            "unit": "ns",
            "range": "± 527124.1530854788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51038256.85714286,
            "unit": "ns",
            "range": "± 1458909.9921026584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100487056.16666667,
            "unit": "ns",
            "range": "± 2089366.4362665482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203295770.15384614,
            "unit": "ns",
            "range": "± 2564165.7850491013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48227.64736842105,
            "unit": "ns",
            "range": "± 9857.828329926771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222623.77586206896,
            "unit": "ns",
            "range": "± 11765.291397462337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216787.828125,
            "unit": "ns",
            "range": "± 9966.673804034213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204694.75510204083,
            "unit": "ns",
            "range": "± 15588.588765908306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998026.6153846155,
            "unit": "ns",
            "range": "± 63624.03432867496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579074.2916666665,
            "unit": "ns",
            "range": "± 81136.87268650434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17675.854166666668,
            "unit": "ns",
            "range": "± 5421.873711820465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72293.85869565218,
            "unit": "ns",
            "range": "± 11423.432934664635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92574.21,
            "unit": "ns",
            "range": "± 29840.30199609382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71422.08510638298,
            "unit": "ns",
            "range": "± 10929.191701127345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4868.916666666667,
            "unit": "ns",
            "range": "± 1244.0500638654014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12986.477777777778,
            "unit": "ns",
            "range": "± 1858.6436698935747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1152118.2113402062,
            "unit": "ns",
            "range": "± 125270.87605007523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2321192.268115942,
            "unit": "ns",
            "range": "± 111950.84960389392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1894120.0105263158,
            "unit": "ns",
            "range": "± 182633.04860557953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19157987.32222222,
            "unit": "ns",
            "range": "± 2030390.4442387961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018517.3333333335,
            "unit": "ns",
            "range": "± 133668.4161345563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3146549.7,
            "unit": "ns",
            "range": "± 110646.81318042836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3677531.088235294,
            "unit": "ns",
            "range": "± 117913.94179972763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853762.825,
            "unit": "ns",
            "range": "± 136669.14882728187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22466892.731182795,
            "unit": "ns",
            "range": "± 2855719.875697009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863733.731299867,
            "unit": "ns",
            "range": "± 413114.6127046193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514177.7729910715,
            "unit": "ns",
            "range": "± 71429.72918399195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1012717.5101023706,
            "unit": "ns",
            "range": "± 28949.420366843216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511058.2121360083,
            "unit": "ns",
            "range": "± 184101.94448838098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653127.8251302083,
            "unit": "ns",
            "range": "± 7030.339062282315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579504.7306640625,
            "unit": "ns",
            "range": "± 3058.5775674625897"
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
          "id": "ff138feed4ca3f49617346cded8736cb6080f8bb",
          "message": "Changelog",
          "timestamp": "2024-01-22T14:48:11+09:00",
          "tree_id": "32d84acaee29aa0e45ba746d842baef0da246626",
          "url": "https://github.com/greymistcube/libplanet/commit/ff138feed4ca3f49617346cded8736cb6080f8bb"
        },
        "date": 1705903604500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7606785.846153846,
            "unit": "ns",
            "range": "± 59275.079629984684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20170955.62244898,
            "unit": "ns",
            "range": "± 1691131.4975777115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46300691.46666667,
            "unit": "ns",
            "range": "± 374363.4951050471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93432628.4,
            "unit": "ns",
            "range": "± 1319891.607326461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189961412.26923078,
            "unit": "ns",
            "range": "± 1683314.7019023781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46980.79569892473,
            "unit": "ns",
            "range": "± 13290.884629306905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235324.4,
            "unit": "ns",
            "range": "± 20757.333588613656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210869.8023255814,
            "unit": "ns",
            "range": "± 11893.565249692812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188423.7213114754,
            "unit": "ns",
            "range": "± 7408.919365942529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3916718.277777778,
            "unit": "ns",
            "range": "± 82888.7074913994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552489.092592593,
            "unit": "ns",
            "range": "± 98249.54933357563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14261.22619047619,
            "unit": "ns",
            "range": "± 1390.0750811930943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64820.391304347824,
            "unit": "ns",
            "range": "± 5951.232811532952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60812.831460674155,
            "unit": "ns",
            "range": "± 5803.181516195067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67354.75510204081,
            "unit": "ns",
            "range": "± 11458.869777763277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3363.1428571428573,
            "unit": "ns",
            "range": "± 312.4147020095982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12068.144444444444,
            "unit": "ns",
            "range": "± 1217.2035302107668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762750.1082474226,
            "unit": "ns",
            "range": "± 522557.80342233344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3614472.036082474,
            "unit": "ns",
            "range": "± 867469.8119446659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2931612.7731958763,
            "unit": "ns",
            "range": "± 890294.1174318288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33110160.204545453,
            "unit": "ns",
            "range": "± 7662802.0286573665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2908000.4166666665,
            "unit": "ns",
            "range": "± 155872.59017182107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2985555.6222222224,
            "unit": "ns",
            "range": "± 95587.52759579447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3552042.6470588236,
            "unit": "ns",
            "range": "± 110066.27885881398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3740857.6842105263,
            "unit": "ns",
            "range": "± 80896.64496068262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22281690.04945055,
            "unit": "ns",
            "range": "± 2368190.935167096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4420682.573299632,
            "unit": "ns",
            "range": "± 85941.97024859212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359387.5364118305,
            "unit": "ns",
            "range": "± 19401.103853363395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 901050.6818129596,
            "unit": "ns",
            "range": "± 15672.363451592157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925007.2237723214,
            "unit": "ns",
            "range": "± 22957.167951057036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750968.3084628705,
            "unit": "ns",
            "range": "± 103199.54891877317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594829.7813846982,
            "unit": "ns",
            "range": "± 16983.904239724547"
          }
        ]
      }
    ]
  }
}