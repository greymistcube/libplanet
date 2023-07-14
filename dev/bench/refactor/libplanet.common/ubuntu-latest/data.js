window.BENCHMARK_DATA = {
  "lastUpdate": 1689315374258,
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
          "id": "ba9389cb4ed6646f6d800bba871490927b0b4eae",
          "message": "Proofreading",
          "timestamp": "2023-07-13T22:14:15+09:00",
          "tree_id": "69062a506833fe2795b227937298e6db95638349",
          "url": "https://github.com/greymistcube/libplanet/commit/ba9389cb4ed6646f6d800bba871490927b0b4eae"
        },
        "date": 1689255708159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380432.6703296703,
            "unit": "ns",
            "range": "± 28222.524171722194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366610.347826087,
            "unit": "ns",
            "range": "± 32108.42469277049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321213.7021276596,
            "unit": "ns",
            "range": "± 24884.210439134593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5608850.753846154,
            "unit": "ns",
            "range": "± 260402.63147756102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4912960.016949153,
            "unit": "ns",
            "range": "± 207723.16363981698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23486.98888888889,
            "unit": "ns",
            "range": "± 4070.9753586409324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142667.48958333334,
            "unit": "ns",
            "range": "± 18071.85589979757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 160263.44086021505,
            "unit": "ns",
            "range": "± 24816.423636314074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276385.9789473684,
            "unit": "ns",
            "range": "± 41195.69407729636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12825.436781609196,
            "unit": "ns",
            "range": "± 3732.469288962735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30692.573033707864,
            "unit": "ns",
            "range": "± 2231.33706801163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727905.1263157895,
            "unit": "ns",
            "range": "± 142103.35856821563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3372840.350515464,
            "unit": "ns",
            "range": "± 232799.08220578326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2272338.3131313133,
            "unit": "ns",
            "range": "± 212319.2273104993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6903271,
            "unit": "ns",
            "range": "± 431431.7387973394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8847935.16773897,
            "unit": "ns",
            "range": "± 278017.2541745048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2865532.510766006,
            "unit": "ns",
            "range": "± 102657.62564407106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1892927.6800242458,
            "unit": "ns",
            "range": "± 54075.61067293615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4920145.3759375,
            "unit": "ns",
            "range": "± 374369.1055607891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1221866.9297672193,
            "unit": "ns",
            "range": "± 70853.05568254669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1088282.738908179,
            "unit": "ns",
            "range": "± 54819.14121027717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3958831.0677966103,
            "unit": "ns",
            "range": "± 174961.4146920109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4499100.380434782,
            "unit": "ns",
            "range": "± 300491.30501113215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5699984.957894737,
            "unit": "ns",
            "range": "± 366127.13874443906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4705317.638297873,
            "unit": "ns",
            "range": "± 306784.9187708615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8531565.535211267,
            "unit": "ns",
            "range": "± 416918.1050927261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9664981.204545455,
            "unit": "ns",
            "range": "± 336082.56916270393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27551200.81081081,
            "unit": "ns",
            "range": "± 934554.0908443342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72046465.36065574,
            "unit": "ns",
            "range": "± 3223189.940460237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142637182.5882353,
            "unit": "ns",
            "range": "± 2791222.7617579866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275467629.0285714,
            "unit": "ns",
            "range": "± 8681348.106738375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55690.68539325843,
            "unit": "ns",
            "range": "± 5196.922329162944"
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
          "id": "1844030a8e097ad9d115e9e04a10bbceeaeb4c0c",
          "message": "Proofreading",
          "timestamp": "2023-07-14T10:00:49+09:00",
          "tree_id": "a76e0f82e18aae27326d5c517b3130d496eaa31a",
          "url": "https://github.com/greymistcube/libplanet/commit/1844030a8e097ad9d115e9e04a10bbceeaeb4c0c"
        },
        "date": 1689297543659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375283.3195876289,
            "unit": "ns",
            "range": "± 62042.177441631466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331961.7731958763,
            "unit": "ns",
            "range": "± 54337.56202406266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310067.3020833333,
            "unit": "ns",
            "range": "± 39069.49511619136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4612898.583333333,
            "unit": "ns",
            "range": "± 346884.40822112386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4314504.134020618,
            "unit": "ns",
            "range": "± 347457.44546411803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27114.95918367347,
            "unit": "ns",
            "range": "± 9778.484131798887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103376.62365591398,
            "unit": "ns",
            "range": "± 17585.42601127792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96134.63829787234,
            "unit": "ns",
            "range": "± 18728.202513713015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104641.10869565218,
            "unit": "ns",
            "range": "± 20831.00253001852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4455.447058823529,
            "unit": "ns",
            "range": "± 612.6473681973208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24596.65,
            "unit": "ns",
            "range": "± 9685.667607216064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423324.65,
            "unit": "ns",
            "range": "± 213166.16248242196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2793247.288659794,
            "unit": "ns",
            "range": "± 332428.4459879725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1872030.7272727273,
            "unit": "ns",
            "range": "± 206018.6991666602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5656592.747368421,
            "unit": "ns",
            "range": "± 634537.2499100454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095496.19484375,
            "unit": "ns",
            "range": "± 243286.39814577767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981320.3930288462,
            "unit": "ns",
            "range": "± 68521.89464738387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411810.9263020833,
            "unit": "ns",
            "range": "± 24181.361292889833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2722897.216916454,
            "unit": "ns",
            "range": "± 107562.16437490533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901799.2302312078,
            "unit": "ns",
            "range": "± 30560.751725075894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833822.964453125,
            "unit": "ns",
            "range": "± 13783.835830609778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300827.28125,
            "unit": "ns",
            "range": "± 377060.06893582415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3421362.8469387754,
            "unit": "ns",
            "range": "± 302609.64290153905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4405496.653061224,
            "unit": "ns",
            "range": "± 418400.26914154034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3735210.7448979593,
            "unit": "ns",
            "range": "± 436244.9102071396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7325031.898989899,
            "unit": "ns",
            "range": "± 776062.1197085978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7826702.319587629,
            "unit": "ns",
            "range": "± 584300.0227579925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21685421.696969695,
            "unit": "ns",
            "range": "± 2202956.166850091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56843322.670103095,
            "unit": "ns",
            "range": "± 4688167.461655832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103809742.34,
            "unit": "ns",
            "range": "± 6144325.362767939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213541454.6734694,
            "unit": "ns",
            "range": "± 13369514.586808244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59628.815217391304,
            "unit": "ns",
            "range": "± 12994.227070637267"
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
          "id": "56bd59f162f0e48716f3775e65b08f0ec6d12616",
          "message": "Proofreading",
          "timestamp": "2023-07-14T14:57:15+09:00",
          "tree_id": "8f00b61403e014777f838a3d1f73817155e3ea78",
          "url": "https://github.com/greymistcube/libplanet/commit/56bd59f162f0e48716f3775e65b08f0ec6d12616"
        },
        "date": 1689315365075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395344.72631578945,
            "unit": "ns",
            "range": "± 45359.89011076273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381207.35353535356,
            "unit": "ns",
            "range": "± 45635.340043255215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334638.86666666664,
            "unit": "ns",
            "range": "± 24783.010293253432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5264643.354166667,
            "unit": "ns",
            "range": "± 322840.877550535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4780061.357142857,
            "unit": "ns",
            "range": "± 203787.55362274422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21051.3488372093,
            "unit": "ns",
            "range": "± 3031.684562853744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114705.89795918367,
            "unit": "ns",
            "range": "± 18596.886245571255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113410.47474747474,
            "unit": "ns",
            "range": "± 23766.615646160375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129472.17204301075,
            "unit": "ns",
            "range": "± 19944.097311705416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7200,
            "unit": "ns",
            "range": "± 1601.1299201740612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22924.264367816093,
            "unit": "ns",
            "range": "± 4040.8147188515927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777650.935483871,
            "unit": "ns",
            "range": "± 109908.79301600449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444541.1717171716,
            "unit": "ns",
            "range": "± 230210.48988941245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2334924.484210526,
            "unit": "ns",
            "range": "± 174275.8088812382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6804139.571428572,
            "unit": "ns",
            "range": "± 521892.88147163193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7360678.351041666,
            "unit": "ns",
            "range": "± 104711.34624526543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2381504.7884457237,
            "unit": "ns",
            "range": "± 51890.9727129711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1696231.40078125,
            "unit": "ns",
            "range": "± 27661.208329718396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3362217.4541666666,
            "unit": "ns",
            "range": "± 61516.195497587396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071205.6078125,
            "unit": "ns",
            "range": "± 18933.89684868733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996849.16015625,
            "unit": "ns",
            "range": "± 21136.681738330815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4121317.34375,
            "unit": "ns",
            "range": "± 283337.0101107171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4374859.159574468,
            "unit": "ns",
            "range": "± 265473.0698889929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5622623.82,
            "unit": "ns",
            "range": "± 225414.46503226733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813786.87012987,
            "unit": "ns",
            "range": "± 244902.07312012598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8445922.466666667,
            "unit": "ns",
            "range": "± 317599.6978139019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9556751.462686567,
            "unit": "ns",
            "range": "± 447424.66059442936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25700523.826530613,
            "unit": "ns",
            "range": "± 1614385.6026061112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68369198.8,
            "unit": "ns",
            "range": "± 1183734.5637626946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134868669.0277778,
            "unit": "ns",
            "range": "± 6653604.93542993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274320723.0833333,
            "unit": "ns",
            "range": "± 10631598.684805354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59649.79120879121,
            "unit": "ns",
            "range": "± 10486.276655723246"
          }
        ]
      }
    ]
  }
}