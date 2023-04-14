window.BENCHMARK_DATA = {
  "lastUpdate": 1681463560811,
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
          "id": "a878c60896e7335a8a60941cd3bd7a42448e3358",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:20:20+09:00",
          "tree_id": "c254f45f3ec7cfd35c874b44f4bbbf61dda135af",
          "url": "https://github.com/greymistcube/libplanet/commit/a878c60896e7335a8a60941cd3bd7a42448e3358"
        },
        "date": 1681461591452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207044.066666666,
            "unit": "ns",
            "range": "± 119561.72492391095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20595461.2,
            "unit": "ns",
            "range": "± 247082.94806175053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51139059.64285714,
            "unit": "ns",
            "range": "± 439369.8804393904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101385017.58333333,
            "unit": "ns",
            "range": "± 1396966.8067161834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207994018.92307693,
            "unit": "ns",
            "range": "± 1651450.1381989738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81349.40217391304,
            "unit": "ns",
            "range": "± 9950.303305399577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393463.06666666665,
            "unit": "ns",
            "range": "± 17570.87875045744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354617.34736842103,
            "unit": "ns",
            "range": "± 35437.0223677575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320452.63333333336,
            "unit": "ns",
            "range": "± 18450.31277540065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5677405.133333334,
            "unit": "ns",
            "range": "± 87756.11717291658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4296369.085106383,
            "unit": "ns",
            "range": "± 285532.1820620418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25583.926315789475,
            "unit": "ns",
            "range": "± 4160.1350562214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118358.21134020618,
            "unit": "ns",
            "range": "± 19572.900772368266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125711.30645161291,
            "unit": "ns",
            "range": "± 12800.856928056284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271487.48421052634,
            "unit": "ns",
            "range": "± 24221.706609174307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9477.32105263158,
            "unit": "ns",
            "range": "± 1224.224669782987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26147.67391304348,
            "unit": "ns",
            "range": "± 4353.88785488767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816856.297752809,
            "unit": "ns",
            "range": "± 281196.3579932818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3313090.4431818184,
            "unit": "ns",
            "range": "± 403676.665824822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2833155.522727273,
            "unit": "ns",
            "range": "± 337451.5713944361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7927738.923913044,
            "unit": "ns",
            "range": "± 1269685.8928700404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406144.988888889,
            "unit": "ns",
            "range": "± 249384.14273158225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3627022.1770833335,
            "unit": "ns",
            "range": "± 236130.13619155434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732236.101123596,
            "unit": "ns",
            "range": "± 261900.26509354514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4580066.088235294,
            "unit": "ns",
            "range": "± 184176.66381690995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8522244.403846154,
            "unit": "ns",
            "range": "± 348955.22005756263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6885349.562127976,
            "unit": "ns",
            "range": "± 156211.22130848016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013189.8060825893,
            "unit": "ns",
            "range": "± 16532.281430402072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286856.977313702,
            "unit": "ns",
            "range": "± 8393.431803083467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832164.5725446427,
            "unit": "ns",
            "range": "± 80527.66186453226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847590.4813701923,
            "unit": "ns",
            "range": "± 5870.671236197065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735444.5950270433,
            "unit": "ns",
            "range": "± 7422.193229027972"
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
          "id": "91bdd549a29b070504f0670e33108f82ad57b082",
          "message": "Fixed tests",
          "timestamp": "2023-04-14T17:22:38+09:00",
          "tree_id": "772c48669284e9f79b6634c1db15ff7daed361b0",
          "url": "https://github.com/greymistcube/libplanet/commit/91bdd549a29b070504f0670e33108f82ad57b082"
        },
        "date": 1681461707452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9456816.068181818,
            "unit": "ns",
            "range": "± 1963900.934608627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22016701.554347824,
            "unit": "ns",
            "range": "± 2495438.7551613525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56360211.95652174,
            "unit": "ns",
            "range": "± 9251637.636338389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119347430.10869566,
            "unit": "ns",
            "range": "± 18352043.20777785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216695120.1,
            "unit": "ns",
            "range": "± 22307069.804876465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73346.78651685393,
            "unit": "ns",
            "range": "± 11212.104651459094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376467.94680851063,
            "unit": "ns",
            "range": "± 22846.610476169728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312855.8370786517,
            "unit": "ns",
            "range": "± 19380.971563591007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306603.4175824176,
            "unit": "ns",
            "range": "± 23217.63662490025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5700123.352941177,
            "unit": "ns",
            "range": "± 209976.81398762326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959506.533333333,
            "unit": "ns",
            "range": "± 63145.34871668998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19745.913978494624,
            "unit": "ns",
            "range": "± 3213.7028678698116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103277.04081632652,
            "unit": "ns",
            "range": "± 17305.023153067836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113388.28125,
            "unit": "ns",
            "range": "± 17255.15512700213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232309.2659574468,
            "unit": "ns",
            "range": "± 32787.07223471173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6865.354838709677,
            "unit": "ns",
            "range": "± 1268.7343457604518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16372.264705882353,
            "unit": "ns",
            "range": "± 2464.7380892783513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678483.6222222222,
            "unit": "ns",
            "range": "± 173625.16392898498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3468031.7470588237,
            "unit": "ns",
            "range": "± 386362.08068212593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2815138.540229885,
            "unit": "ns",
            "range": "± 263241.49561676936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13129084.13402062,
            "unit": "ns",
            "range": "± 5722867.410138196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292001.5,
            "unit": "ns",
            "range": "± 46545.16385850827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424088.2625,
            "unit": "ns",
            "range": "± 172142.6484754589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4423702.7,
            "unit": "ns",
            "range": "± 155065.61780678527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4247322.013333334,
            "unit": "ns",
            "range": "± 205145.58812090696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8179967.073170732,
            "unit": "ns",
            "range": "± 284245.29151328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6517756.094039352,
            "unit": "ns",
            "range": "± 180055.5147863992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965181.6735276442,
            "unit": "ns",
            "range": "± 30726.093582734753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352840.3702980324,
            "unit": "ns",
            "range": "± 37722.97906139607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2883622.8706552936,
            "unit": "ns",
            "range": "± 298504.37293330044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793722.7705078125,
            "unit": "ns",
            "range": "± 6213.562270487397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711043.2991768973,
            "unit": "ns",
            "range": "± 9599.917211496951"
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
          "id": "d903106676c5c142b8adc716321cc6527fa648b4",
          "message": "Changelog",
          "timestamp": "2023-04-14T17:46:14+09:00",
          "tree_id": "d879dbb029cf49fb8dce802a83de172200fccda5",
          "url": "https://github.com/greymistcube/libplanet/commit/d903106676c5c142b8adc716321cc6527fa648b4"
        },
        "date": 1681463530595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8497999.352941176,
            "unit": "ns",
            "range": "± 343947.6324485356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23678575.591397848,
            "unit": "ns",
            "range": "± 4269251.795983208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62031844.87096774,
            "unit": "ns",
            "range": "± 8902225.467113506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112686707.92307693,
            "unit": "ns",
            "range": "± 1756371.5150403336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230928461.85555556,
            "unit": "ns",
            "range": "± 17451250.145159785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77501.3111111111,
            "unit": "ns",
            "range": "± 12177.494290001585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396315.18888888886,
            "unit": "ns",
            "range": "± 33014.546728419904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330518.86842105264,
            "unit": "ns",
            "range": "± 28141.10062155724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305525.42553191487,
            "unit": "ns",
            "range": "± 42298.55256534704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5706644.593406593,
            "unit": "ns",
            "range": "± 353196.3762416967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4105001.214285714,
            "unit": "ns",
            "range": "± 174944.58743673033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21012.833333333332,
            "unit": "ns",
            "range": "± 4548.633943845345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100984.17010309278,
            "unit": "ns",
            "range": "± 18654.72689188635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115413.19072164949,
            "unit": "ns",
            "range": "± 14493.469368679484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 265043.42553191487,
            "unit": "ns",
            "range": "± 29704.816224475766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8116.458333333333,
            "unit": "ns",
            "range": "± 1908.1684848740863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21800.110526315788,
            "unit": "ns",
            "range": "± 4214.554405397827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2004237.8260869565,
            "unit": "ns",
            "range": "± 466618.9157284987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4036117.3191489363,
            "unit": "ns",
            "range": "± 970581.6818057763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3316105.989010989,
            "unit": "ns",
            "range": "± 839947.8823077389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11337397.760416666,
            "unit": "ns",
            "range": "± 4003994.7418317148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3554223.782608696,
            "unit": "ns",
            "range": "± 373018.9326663684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3744833.3139534886,
            "unit": "ns",
            "range": "± 347794.25288484816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5093454.119565218,
            "unit": "ns",
            "range": "± 628541.1806055587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5035173.166666667,
            "unit": "ns",
            "range": "± 919451.4335348721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8965461.577777777,
            "unit": "ns",
            "range": "± 761404.9064958503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7386159.15078125,
            "unit": "ns",
            "range": "± 384645.9631955632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137532.85339227,
            "unit": "ns",
            "range": "± 148999.33101668005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391932.2716206396,
            "unit": "ns",
            "range": "± 51076.04827483259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3206643.760470361,
            "unit": "ns",
            "range": "± 246395.92375652434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869755.8446180555,
            "unit": "ns",
            "range": "± 36099.140264109716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866238.2993517889,
            "unit": "ns",
            "range": "± 41764.567820146694"
          }
        ]
      }
    ]
  }
}