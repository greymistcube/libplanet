window.BENCHMARK_DATA = {
  "lastUpdate": 1682995055978,
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
          "id": "36031c4669e9a2e4d73962ccf813eedf68216b4e",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T10:52:11+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/36031c4669e9a2e4d73962ccf813eedf68216b4e"
        },
        "date": 1682994017277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8887943.525252525,
            "unit": "ns",
            "range": "± 640921.0170560092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21790478.11827957,
            "unit": "ns",
            "range": "± 1317623.0372668516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750651.696078435,
            "unit": "ns",
            "range": "± 2181981.9255170287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109410918.88505746,
            "unit": "ns",
            "range": "± 5971755.050184842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229668030.12328768,
            "unit": "ns",
            "range": "± 11374213.70680118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80063.48837209302,
            "unit": "ns",
            "range": "± 8085.369834015285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400456.01020408166,
            "unit": "ns",
            "range": "± 64059.11110475092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330883.5,
            "unit": "ns",
            "range": "± 35465.466806852506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313141.76666666666,
            "unit": "ns",
            "range": "± 28348.53135081806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4404313.1,
            "unit": "ns",
            "range": "± 303279.5396052955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4255066.53125,
            "unit": "ns",
            "range": "± 401067.0346044792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26730.119047619046,
            "unit": "ns",
            "range": "± 4339.733850050181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128050.5632183908,
            "unit": "ns",
            "range": "± 17785.252777002836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122563.21348314607,
            "unit": "ns",
            "range": "± 15173.245516722032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133860.45876288658,
            "unit": "ns",
            "range": "± 21430.417633742356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7116.586956521739,
            "unit": "ns",
            "range": "± 1213.9590498748519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20335.924731182797,
            "unit": "ns",
            "range": "± 4819.041489207974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1725996,
            "unit": "ns",
            "range": "± 198312.67865733444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3463071.629032258,
            "unit": "ns",
            "range": "± 478705.4587786329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2846245.909090909,
            "unit": "ns",
            "range": "± 371447.2169501538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7875861.086206896,
            "unit": "ns",
            "range": "± 1297845.663886948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361659.1666666665,
            "unit": "ns",
            "range": "± 183869.25610364697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3794817.1391752576,
            "unit": "ns",
            "range": "± 313240.62888457475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4852065.196969697,
            "unit": "ns",
            "range": "± 438020.32423026307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4493825.510416667,
            "unit": "ns",
            "range": "± 303969.240155506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8158883.6875,
            "unit": "ns",
            "range": "± 728229.6663580841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7838796.459603659,
            "unit": "ns",
            "range": "± 415298.53480005753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2400475.1126833544,
            "unit": "ns",
            "range": "± 183511.74604301158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1536836.6565234375,
            "unit": "ns",
            "range": "± 105005.86013758041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3790301.613125,
            "unit": "ns",
            "range": "± 381983.8625346348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1065759.2031709559,
            "unit": "ns",
            "range": "± 56947.63559127292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861411.9657377861,
            "unit": "ns",
            "range": "± 42185.40118002611"
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
          "id": "de9d17c6e23bde9275d8fdfded883f81ca930325",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T11:04:10+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/de9d17c6e23bde9275d8fdfded883f81ca930325"
        },
        "date": 1682994453673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8758227,
            "unit": "ns",
            "range": "± 489800.45339189825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20160179.775862068,
            "unit": "ns",
            "range": "± 877902.9354033142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50865245.0625,
            "unit": "ns",
            "range": "± 968548.4715753066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105451349.41860466,
            "unit": "ns",
            "range": "± 3884360.182065278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212925142.81578946,
            "unit": "ns",
            "range": "± 9158172.641015638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67913.64583333333,
            "unit": "ns",
            "range": "± 11059.528407171578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337371.5393258427,
            "unit": "ns",
            "range": "± 23503.39797244809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318461.70967741933,
            "unit": "ns",
            "range": "± 31981.69084416509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293883.7580645161,
            "unit": "ns",
            "range": "± 23157.829937899598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4323295.166666667,
            "unit": "ns",
            "range": "± 110362.06009851575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879127.769230769,
            "unit": "ns",
            "range": "± 104379.46835630375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19907.5625,
            "unit": "ns",
            "range": "± 2877.7334934302944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100504.6313131313,
            "unit": "ns",
            "range": "± 13421.18949885641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106725.43939393939,
            "unit": "ns",
            "range": "± 13259.354211979495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115578.49438202247,
            "unit": "ns",
            "range": "± 11440.748182705609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7299.103092783505,
            "unit": "ns",
            "range": "± 1080.1391353715358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20329.959595959597,
            "unit": "ns",
            "range": "± 4724.116580667608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713646.375,
            "unit": "ns",
            "range": "± 203434.28759946048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3126623.836956522,
            "unit": "ns",
            "range": "± 202132.9435675462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2767646.0918367347,
            "unit": "ns",
            "range": "± 361334.0330018446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6945069.696629213,
            "unit": "ns",
            "range": "± 382779.8100026248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3403691.4838709678,
            "unit": "ns",
            "range": "± 103696.11408690651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426083.476190476,
            "unit": "ns",
            "range": "± 183277.4877247235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493160.076923077,
            "unit": "ns",
            "range": "± 184244.15226087178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4543678.256097561,
            "unit": "ns",
            "range": "± 224213.10213424638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7801198.4375,
            "unit": "ns",
            "range": "± 303234.8526666451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7112830.5234375,
            "unit": "ns",
            "range": "± 227018.16538428733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143217.937199519,
            "unit": "ns",
            "range": "± 57412.1038046833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332978.8075520834,
            "unit": "ns",
            "range": "± 22845.232910511688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643684.7281605112,
            "unit": "ns",
            "range": "± 83749.3318363747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832676.3964192708,
            "unit": "ns",
            "range": "± 15290.747751141967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748070.7619243421,
            "unit": "ns",
            "range": "± 15973.501943026547"
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
          "id": "5a01ccd902ade84c3b1fefd131c97a8da597694c",
          "message": "Changelog",
          "timestamp": "2023-05-02T11:11:19+09:00",
          "tree_id": "b4f52824685d8f75d04a2969594c1ccbf26dcfb9",
          "url": "https://github.com/greymistcube/libplanet/commit/5a01ccd902ade84c3b1fefd131c97a8da597694c"
        },
        "date": 1682995042687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8020964.25,
            "unit": "ns",
            "range": "± 152396.46371378395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20915455.116161615,
            "unit": "ns",
            "range": "± 1653133.9051463318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51182124.04444444,
            "unit": "ns",
            "range": "± 1941578.8584019467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102012398.08064516,
            "unit": "ns",
            "range": "± 5779290.424047913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201410725.13043478,
            "unit": "ns",
            "range": "± 4403924.105114182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72369.20652173914,
            "unit": "ns",
            "range": "± 14119.220499246077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353353.60638297873,
            "unit": "ns",
            "range": "± 25589.639276690512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378693.1208791209,
            "unit": "ns",
            "range": "± 61559.381263556344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318556.86363636365,
            "unit": "ns",
            "range": "± 29969.093748712556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4653828.170454546,
            "unit": "ns",
            "range": "± 520940.7920515132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132988.2613636362,
            "unit": "ns",
            "range": "± 444489.376380242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24568.174157303372,
            "unit": "ns",
            "range": "± 5392.189281256061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106709.20879120879,
            "unit": "ns",
            "range": "± 14301.24191228509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107940.58426966293,
            "unit": "ns",
            "range": "± 15241.131450937288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123301.66666666667,
            "unit": "ns",
            "range": "± 15618.904068935397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8620.8125,
            "unit": "ns",
            "range": "± 1343.6886020244892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25432.566666666666,
            "unit": "ns",
            "range": "± 4368.260216762311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764025.4623655914,
            "unit": "ns",
            "range": "± 234866.5462108012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3433968.576923077,
            "unit": "ns",
            "range": "± 451740.2575143579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3124337.988888889,
            "unit": "ns",
            "range": "± 535868.5195927944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7093654.705882353,
            "unit": "ns",
            "range": "± 589729.9290733454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298937.886792453,
            "unit": "ns",
            "range": "± 136881.30566418884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333951.4166666665,
            "unit": "ns",
            "range": "± 164788.44005698792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4545429.7764705885,
            "unit": "ns",
            "range": "± 381947.8229012868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4593475.884210526,
            "unit": "ns",
            "range": "± 312593.3854705054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8489814.461538462,
            "unit": "ns",
            "range": "± 784605.8143794996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7644530.8293678975,
            "unit": "ns",
            "range": "± 799531.4442545627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2459856.200797872,
            "unit": "ns",
            "range": "± 257763.0843876075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433835.3111909907,
            "unit": "ns",
            "range": "± 81518.75775597626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3349697.106484375,
            "unit": "ns",
            "range": "± 309498.86729828024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903234.7738574218,
            "unit": "ns",
            "range": "± 76491.3913911954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862484.2817294034,
            "unit": "ns",
            "range": "± 36498.007452824495"
          }
        ]
      }
    ]
  }
}