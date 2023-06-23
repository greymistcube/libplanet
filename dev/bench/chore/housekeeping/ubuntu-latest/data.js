window.BENCHMARK_DATA = {
  "lastUpdate": 1687484401568,
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
          "id": "76832be1dd36f1c70b3da27dec6ee5d77d0869b1",
          "message": "Housekeeping",
          "timestamp": "2023-06-22T22:07:03+09:00",
          "tree_id": "355d07e94a01d318834dec7b59c143d0d1548a98",
          "url": "https://github.com/greymistcube/libplanet/commit/76832be1dd36f1c70b3da27dec6ee5d77d0869b1"
        },
        "date": 1687440100900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555501.025,
            "unit": "ns",
            "range": "± 113632.36294374436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4025519.8235294116,
            "unit": "ns",
            "range": "± 81040.57207213812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4681179,
            "unit": "ns",
            "range": "± 102230.25402492161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4734993.472727273,
            "unit": "ns",
            "range": "± 200042.2557702779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7527830.476190476,
            "unit": "ns",
            "range": "± 159069.9375861508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8782711.5,
            "unit": "ns",
            "range": "± 214353.9078298063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23182832.2,
            "unit": "ns",
            "range": "± 309966.9853390381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57783831.46666667,
            "unit": "ns",
            "range": "± 612295.2005560561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113952911.86666666,
            "unit": "ns",
            "range": "± 1181861.271211574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228417945.46666667,
            "unit": "ns",
            "range": "± 1993519.2258408556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307900.71428571426,
            "unit": "ns",
            "range": "± 12222.375215835367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287342.30188679247,
            "unit": "ns",
            "range": "± 11813.296230527223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250618.44285714286,
            "unit": "ns",
            "range": "± 12106.803647914305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4695403.4,
            "unit": "ns",
            "range": "± 71289.32524558938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4225674.571428572,
            "unit": "ns",
            "range": "± 63607.81914164362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21543.443298969072,
            "unit": "ns",
            "range": "± 2258.2841659887868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103994.65656565657,
            "unit": "ns",
            "range": "± 8370.683197145365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82857.22916666667,
            "unit": "ns",
            "range": "± 5757.8161950867725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108242.87234042553,
            "unit": "ns",
            "range": "± 15985.944170967547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6269.448979591837,
            "unit": "ns",
            "range": "± 1306.9336752072388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21269.76842105263,
            "unit": "ns",
            "range": "± 2666.4639165271105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51898.34444444445,
            "unit": "ns",
            "range": "± 2895.0442086283597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053437.776041667,
            "unit": "ns",
            "range": "± 34404.72225522587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900328.30703125,
            "unit": "ns",
            "range": "± 3466.914046823986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395629.353515625,
            "unit": "ns",
            "range": "± 3221.1843846295233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652822.0753348214,
            "unit": "ns",
            "range": "± 5233.386967884361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862575.9843098958,
            "unit": "ns",
            "range": "± 708.4039040900657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764172.0606166294,
            "unit": "ns",
            "range": "± 1568.6262228626413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583276.898989899,
            "unit": "ns",
            "range": "± 132513.7799926048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978784.290322581,
            "unit": "ns",
            "range": "± 134198.5730320884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464059.815384615,
            "unit": "ns",
            "range": "± 114448.56135439353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5895428.085714285,
            "unit": "ns",
            "range": "± 190662.7738656382"
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
          "id": "1af342df243f9b25192e5e3e88e2d2407fe8a1c6",
          "message": "[skip changelog] Housekeeping",
          "timestamp": "2023-06-23T10:21:43+09:00",
          "tree_id": "0a1142c010416a4a2d71e91e847d15ca5bf08133",
          "url": "https://github.com/greymistcube/libplanet/commit/1af342df243f9b25192e5e3e88e2d2407fe8a1c6"
        },
        "date": 1687484058740,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287720.586956522,
            "unit": "ns",
            "range": "± 125820.93405057417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3496036.066666667,
            "unit": "ns",
            "range": "± 46381.19825573823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293779.571428572,
            "unit": "ns",
            "range": "± 57059.29873077964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4265040.318181818,
            "unit": "ns",
            "range": "± 158534.19352535153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6850656.714285715,
            "unit": "ns",
            "range": "± 191211.31382725493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7717351.142857143,
            "unit": "ns",
            "range": "± 25836.261854095817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19800962.466666665,
            "unit": "ns",
            "range": "± 123150.5073603995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50357692.28571428,
            "unit": "ns",
            "range": "± 259010.50379871842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101423000.93333334,
            "unit": "ns",
            "range": "± 748136.8417526556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204436007.2857143,
            "unit": "ns",
            "range": "± 976084.7050861635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289703.3488372093,
            "unit": "ns",
            "range": "± 10703.270932809724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272808.8039215686,
            "unit": "ns",
            "range": "± 11126.788302146506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232071.35294117648,
            "unit": "ns",
            "range": "± 4417.653943853803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4267244.714285715,
            "unit": "ns",
            "range": "± 20387.20084694381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934536.785714286,
            "unit": "ns",
            "range": "± 17690.426703461664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17981.968085106382,
            "unit": "ns",
            "range": "± 1669.784098155914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89494.36363636363,
            "unit": "ns",
            "range": "± 4189.936168547619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75520.1,
            "unit": "ns",
            "range": "± 2216.211295634185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92735.01030927835,
            "unit": "ns",
            "range": "± 11710.587468802578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4623.4795918367345,
            "unit": "ns",
            "range": "± 580.4013405171102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17667.43157894737,
            "unit": "ns",
            "range": "± 1484.1167561215232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47066.01176470588,
            "unit": "ns",
            "range": "± 2420.872085555502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6334834.142427885,
            "unit": "ns",
            "range": "± 13503.680702758622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992881.8419471155,
            "unit": "ns",
            "range": "± 2631.7431234038113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344761.653094952,
            "unit": "ns",
            "range": "± 511.47829243809826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598270.681189904,
            "unit": "ns",
            "range": "± 1007.1742749432032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813186.3540736607,
            "unit": "ns",
            "range": "± 1548.002040831017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744571.1374860491,
            "unit": "ns",
            "range": "± 543.0024275696654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406997.89,
            "unit": "ns",
            "range": "± 120884.52601134595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2634632.464285714,
            "unit": "ns",
            "range": "± 62883.14491975315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195160.685714286,
            "unit": "ns",
            "range": "± 106806.88003874065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5206521.75,
            "unit": "ns",
            "range": "± 119579.64371073716"
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
          "id": "a909d1f92578c217583b52f79127f41fe8ec42fd",
          "message": "Housekeeping",
          "timestamp": "2023-06-23T10:20:56+09:00",
          "tree_id": "0a1142c010416a4a2d71e91e847d15ca5bf08133",
          "url": "https://github.com/greymistcube/libplanet/commit/a909d1f92578c217583b52f79127f41fe8ec42fd"
        },
        "date": 1687484392710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4197090.306122449,
            "unit": "ns",
            "range": "± 279237.4042491851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4468738.6,
            "unit": "ns",
            "range": "± 333436.13823988504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5925746.109090909,
            "unit": "ns",
            "range": "± 251577.35407069157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5581428.4639175255,
            "unit": "ns",
            "range": "± 336233.9769550694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9668032.761363637,
            "unit": "ns",
            "range": "± 526291.2666151503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9941054.163934426,
            "unit": "ns",
            "range": "± 443380.3922677148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27644491.942857143,
            "unit": "ns",
            "range": "± 903415.7447353038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71286340.11764705,
            "unit": "ns",
            "range": "± 1422051.192253108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144863492.8,
            "unit": "ns",
            "range": "± 3322752.9439510754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292948235.03571427,
            "unit": "ns",
            "range": "± 8093222.010775301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386526.21649484534,
            "unit": "ns",
            "range": "± 45906.58621574786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371178,
            "unit": "ns",
            "range": "± 36935.153907543325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321503.9793814433,
            "unit": "ns",
            "range": "± 36048.04694142579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5591051.372093023,
            "unit": "ns",
            "range": "± 302243.28156320564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5188727.206896552,
            "unit": "ns",
            "range": "± 281076.0209726492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26859.30612244898,
            "unit": "ns",
            "range": "± 8243.190957575527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122392.70707070707,
            "unit": "ns",
            "range": "± 27214.34631048841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132194.72727272726,
            "unit": "ns",
            "range": "± 31138.48860835439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139941.05154639174,
            "unit": "ns",
            "range": "± 28949.83909295062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6967.125,
            "unit": "ns",
            "range": "± 1561.122863003039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27586.938775510203,
            "unit": "ns",
            "range": "± 9011.372597962294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62706.75,
            "unit": "ns",
            "range": "± 11342.638039981879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7511305.8921875,
            "unit": "ns",
            "range": "± 118715.71953575352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2411179.3649553573,
            "unit": "ns",
            "range": "± 26959.50602528925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1745631.4928385417,
            "unit": "ns",
            "range": "± 21824.60030956789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3350881.2192708333,
            "unit": "ns",
            "range": "± 37613.20786583238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1087871.5525948661,
            "unit": "ns",
            "range": "± 11572.905390324875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1004372.6826822917,
            "unit": "ns",
            "range": "± 16503.138486050037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829722.5918367347,
            "unit": "ns",
            "range": "± 178611.37967843984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3730217.6774193547,
            "unit": "ns",
            "range": "± 255292.39012041627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2970454.4795918367,
            "unit": "ns",
            "range": "± 213023.29655209606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7747410.688172043,
            "unit": "ns",
            "range": "± 493492.96507826605"
          }
        ]
      }
    ]
  }
}