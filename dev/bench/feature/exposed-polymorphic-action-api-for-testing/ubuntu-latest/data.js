window.BENCHMARK_DATA = {
  "lastUpdate": 1684127729896,
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
          "id": "c551f90e210cec2fb0d2b8328218db7698d1459f",
          "message": "Changelog",
          "timestamp": "2023-05-15T13:59:10+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/greymistcube/libplanet/commit/c551f90e210cec2fb0d2b8328218db7698d1459f"
        },
        "date": 1684127528102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515325.64516129,
            "unit": "ns",
            "range": "± 49824.49551813404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745921.6,
            "unit": "ns",
            "range": "± 39305.62242914946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564199.470588235,
            "unit": "ns",
            "range": "± 93691.1419953333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4652834.176470588,
            "unit": "ns",
            "range": "± 150199.0882348291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7167850.444444444,
            "unit": "ns",
            "range": "± 177291.33395722797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305870.54761904763,
            "unit": "ns",
            "range": "± 16369.139133184755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304718.7368421053,
            "unit": "ns",
            "range": "± 9987.99738790355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272147.82608695654,
            "unit": "ns",
            "range": "± 6749.297711965527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4530148.642857143,
            "unit": "ns",
            "range": "± 47148.827585728905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3975265.8,
            "unit": "ns",
            "range": "± 57263.740642000375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23148.61224489796,
            "unit": "ns",
            "range": "± 2560.4933627070927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113973.3870967742,
            "unit": "ns",
            "range": "± 8059.195850801171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92161.101010101,
            "unit": "ns",
            "range": "± 9453.61503848212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101958.22680412371,
            "unit": "ns",
            "range": "± 14283.462756734589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6164.734042553191,
            "unit": "ns",
            "range": "± 813.569781101238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23049.53125,
            "unit": "ns",
            "range": "± 1842.3375423808172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6065333.041145833,
            "unit": "ns",
            "range": "± 58191.1649121342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839634.8670479911,
            "unit": "ns",
            "range": "± 3293.779248222009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340390.9548177083,
            "unit": "ns",
            "range": "± 527.8474017105235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536488.073958333,
            "unit": "ns",
            "range": "± 4370.38016121169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797354.171875,
            "unit": "ns",
            "range": "± 655.354724932539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754968.8421223959,
            "unit": "ns",
            "range": "± 547.0127998521795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8167149.642857143,
            "unit": "ns",
            "range": "± 86244.08672849326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20213513.85714286,
            "unit": "ns",
            "range": "± 174503.6294808163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50380576.21428572,
            "unit": "ns",
            "range": "± 326906.03349543706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102378483.13333334,
            "unit": "ns",
            "range": "± 1000153.180613626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208022663.5,
            "unit": "ns",
            "range": "± 1897782.1030690111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463186.9247311829,
            "unit": "ns",
            "range": "± 87113.0106325207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764837.272727273,
            "unit": "ns",
            "range": "± 103698.09913517929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312496.340909091,
            "unit": "ns",
            "range": "± 122943.03476083661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502766.166666667,
            "unit": "ns",
            "range": "± 162316.10798538444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53757.886597938144,
            "unit": "ns",
            "range": "± 6936.226953581418"
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
          "id": "784c7a59371c5826a5c70a0913377aa5ab7e65ca",
          "message": "Added ReloadLoader method",
          "timestamp": "2023-05-15T13:55:44+09:00",
          "tree_id": "fb1b9ab08b77c64d761c9a2c4d1fa5620a5f4e11",
          "url": "https://github.com/greymistcube/libplanet/commit/784c7a59371c5826a5c70a0913377aa5ab7e65ca"
        },
        "date": 1684127720296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4206263.375,
            "unit": "ns",
            "range": "± 276505.5874091688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4534054.298969072,
            "unit": "ns",
            "range": "± 290169.64784688764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5938723.410526316,
            "unit": "ns",
            "range": "± 332094.69027674996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5589191.010416667,
            "unit": "ns",
            "range": "± 438397.8222014554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9527437.76119403,
            "unit": "ns",
            "range": "± 451395.47401398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402729.3229166667,
            "unit": "ns",
            "range": "± 52051.67966438836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363485.4583333333,
            "unit": "ns",
            "range": "± 46093.98625301334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316226.4742268041,
            "unit": "ns",
            "range": "± 37838.16760811011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5311365.215053763,
            "unit": "ns",
            "range": "± 373156.954837163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5030225,
            "unit": "ns",
            "range": "± 349676.64478244423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26771.11,
            "unit": "ns",
            "range": "± 10502.71814158198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115468.0625,
            "unit": "ns",
            "range": "± 19544.61264137296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114854.89690721649,
            "unit": "ns",
            "range": "± 24882.203207264316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127548.57471264368,
            "unit": "ns",
            "range": "± 20841.958169526282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7716.091954022989,
            "unit": "ns",
            "range": "± 1498.0517318991817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24021.958333333332,
            "unit": "ns",
            "range": "± 7842.64692148561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7437724.134375,
            "unit": "ns",
            "range": "± 196313.55845473244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2392613.412239583,
            "unit": "ns",
            "range": "± 43398.89026242605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1722008.2490234375,
            "unit": "ns",
            "range": "± 20327.507044452697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3306416.8795572915,
            "unit": "ns",
            "range": "± 67013.15963098968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1082103.1276041667,
            "unit": "ns",
            "range": "± 19563.951163598813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003900.8428710938,
            "unit": "ns",
            "range": "± 18591.34462250231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11755346.907216495,
            "unit": "ns",
            "range": "± 863731.8761389448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27455556.336842105,
            "unit": "ns",
            "range": "± 1817927.7407857655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71914950.15,
            "unit": "ns",
            "range": "± 1613130.3563491006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142064028.3478261,
            "unit": "ns",
            "range": "± 3140939.787074137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284875700.9148936,
            "unit": "ns",
            "range": "± 11106481.094265016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796067.6082474226,
            "unit": "ns",
            "range": "± 203263.3104359628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3550818.659574468,
            "unit": "ns",
            "range": "± 292844.49330985267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2952680.431578947,
            "unit": "ns",
            "range": "± 265634.5187659025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7514955.333333333,
            "unit": "ns",
            "range": "± 565843.1376014617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64631.41935483871,
            "unit": "ns",
            "range": "± 13461.14013140965"
          }
        ]
      }
    ]
  }
}