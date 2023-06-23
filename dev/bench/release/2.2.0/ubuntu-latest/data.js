window.BENCHMARK_DATA = {
  "lastUpdate": 1687486204271,
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
          "id": "a1b809aebe20f9fa9d23c821b674da5f9365766b",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:51:07+09:00",
          "tree_id": "378e041fcf4b607cf95c54995288889dcc255288",
          "url": "https://github.com/greymistcube/libplanet/commit/a1b809aebe20f9fa9d23c821b674da5f9365766b"
        },
        "date": 1687485785880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192276.9615384615,
            "unit": "ns",
            "range": "± 54309.70067785737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397530.727272727,
            "unit": "ns",
            "range": "± 99542.82756785917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191730.3125,
            "unit": "ns",
            "range": "± 82307.39237008119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4070815.029411765,
            "unit": "ns",
            "range": "± 130687.25242290313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6579872.2,
            "unit": "ns",
            "range": "± 100041.6143099603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7692320.642857143,
            "unit": "ns",
            "range": "± 22020.661705306688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19688874.2,
            "unit": "ns",
            "range": "± 155039.46782176837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50404495.266666666,
            "unit": "ns",
            "range": "± 626000.1787900779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99775117.26666667,
            "unit": "ns",
            "range": "± 1337517.0414195247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199667189.66666666,
            "unit": "ns",
            "range": "± 1543505.3749872474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282795.7027027027,
            "unit": "ns",
            "range": "± 9563.401541713496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263880.5128205128,
            "unit": "ns",
            "range": "± 8998.074109356006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227193.07692307694,
            "unit": "ns",
            "range": "± 2859.1750984488067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4156731.1428571427,
            "unit": "ns",
            "range": "± 38495.70406173644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3876442.1333333333,
            "unit": "ns",
            "range": "± 42583.15894788634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16515.831578947367,
            "unit": "ns",
            "range": "± 1256.730786288347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80587.08333333333,
            "unit": "ns",
            "range": "± 4328.39378708828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70777.07692307692,
            "unit": "ns",
            "range": "± 785.343392147501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78415.65384615384,
            "unit": "ns",
            "range": "± 3503.159441622173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4084.704081632653,
            "unit": "ns",
            "range": "± 525.8931765853641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16005.175257731958,
            "unit": "ns",
            "range": "± 1375.7694968809672"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46401.680555555555,
            "unit": "ns",
            "range": "± 2287.913797415742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055180.244977678,
            "unit": "ns",
            "range": "± 16235.028917606392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914653.3112444195,
            "unit": "ns",
            "range": "± 5071.857629361349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352893.1096354167,
            "unit": "ns",
            "range": "± 1014.4481395273698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2729227.2822916666,
            "unit": "ns",
            "range": "± 16115.69946966043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808122.7220052084,
            "unit": "ns",
            "range": "± 462.13269914849025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742798.6741768973,
            "unit": "ns",
            "range": "± 440.3120151672022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323900.3505154639,
            "unit": "ns",
            "range": "± 82225.56486276552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2582808.3720930233,
            "unit": "ns",
            "range": "± 92927.54091457321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105934.523809524,
            "unit": "ns",
            "range": "± 85045.5782279386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5131434.230769231,
            "unit": "ns",
            "range": "± 138869.53636080382"
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
          "id": "58124168990c3af08c89e89de164f2e90c7e8132",
          "message": "Release 2.2.0",
          "timestamp": "2023-06-23T10:52:07+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/greymistcube/libplanet/commit/58124168990c3af08c89e89de164f2e90c7e8132"
        },
        "date": 1687486195343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3756217.737373737,
            "unit": "ns",
            "range": "± 339804.2504136693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826341.7448979593,
            "unit": "ns",
            "range": "± 254044.65640193567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5309107.929292929,
            "unit": "ns",
            "range": "± 367430.6448549932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4802261.072916667,
            "unit": "ns",
            "range": "± 391417.204470579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8781045.21875,
            "unit": "ns",
            "range": "± 523326.49091416126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9011458.16091954,
            "unit": "ns",
            "range": "± 492456.3729181918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24404959.153061226,
            "unit": "ns",
            "range": "± 2014875.2674076064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70595422.08928572,
            "unit": "ns",
            "range": "± 3030981.2690733923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121768978.90163934,
            "unit": "ns",
            "range": "± 5478536.206398958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245182894.12280703,
            "unit": "ns",
            "range": "± 10608927.500390565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370680.44897959183,
            "unit": "ns",
            "range": "± 61044.59182157187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328120.7113402062,
            "unit": "ns",
            "range": "± 43020.17785899978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284229.59375,
            "unit": "ns",
            "range": "± 33799.493796140334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4978371.091836735,
            "unit": "ns",
            "range": "± 321247.4929029239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4674001.412371134,
            "unit": "ns",
            "range": "± 306460.0507899558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27968.30612244898,
            "unit": "ns",
            "range": "± 11103.384440297214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113255.76767676767,
            "unit": "ns",
            "range": "± 24030.48844392553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124420.41666666667,
            "unit": "ns",
            "range": "± 29145.230831915098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139951.70103092783,
            "unit": "ns",
            "range": "± 26544.327029347278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11117.97,
            "unit": "ns",
            "range": "± 8447.600646092278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34416.244897959186,
            "unit": "ns",
            "range": "± 12552.455276366449"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66237.375,
            "unit": "ns",
            "range": "± 15995.856539314042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7035566.010569853,
            "unit": "ns",
            "range": "± 140936.2421063398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2191959.413504464,
            "unit": "ns",
            "range": "± 14254.030868679149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1600892.4910714286,
            "unit": "ns",
            "range": "± 24403.846959645787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2975115.9542410714,
            "unit": "ns",
            "range": "± 32988.20080065545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999206.6557992789,
            "unit": "ns",
            "range": "± 10061.28391927739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927764.388671875,
            "unit": "ns",
            "range": "± 22157.07993417197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1726900.7395833333,
            "unit": "ns",
            "range": "± 191099.56001261665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3115387.131313131,
            "unit": "ns",
            "range": "± 252486.7950540509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619056.909090909,
            "unit": "ns",
            "range": "± 230357.3391660776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6820063.626262627,
            "unit": "ns",
            "range": "± 593283.8061670597"
          }
        ]
      }
    ]
  }
}