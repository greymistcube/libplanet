window.BENCHMARK_DATA = {
  "lastUpdate": 1678931558188,
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
          "id": "393b0e52a14ff970955577d3003f68d1a0a90a21",
          "message": "Changelog",
          "timestamp": "2023-03-16T10:37:12+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/greymistcube/libplanet/commit/393b0e52a14ff970955577d3003f68d1a0a90a21"
        },
        "date": 1678931430067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115672.22680412371,
            "unit": "ns",
            "range": "± 8218.580014091487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101924.75510204081,
            "unit": "ns",
            "range": "± 13268.51771416684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208210.8510638298,
            "unit": "ns",
            "range": "± 23441.250249675297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181881.16483516485,
            "unit": "ns",
            "range": "± 12985.799706058184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3429886.25,
            "unit": "ns",
            "range": "± 65713.96815644804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9533317.6,
            "unit": "ns",
            "range": "± 173024.82325286657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16714.977528089887,
            "unit": "ns",
            "range": "± 1876.7315760598754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49706.3085106383,
            "unit": "ns",
            "range": "± 6079.134822828027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46944.36781609195,
            "unit": "ns",
            "range": "± 5475.888586944274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104421.04301075269,
            "unit": "ns",
            "range": "± 17311.452354686036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5274.966292134832,
            "unit": "ns",
            "range": "± 676.5816729815438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16282.795454545454,
            "unit": "ns",
            "range": "± 2748.8364650708563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4615104.369977678,
            "unit": "ns",
            "range": "± 131636.7390973868"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5841589.866666666,
            "unit": "ns",
            "range": "± 83581.05712751174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25571860.675,
            "unit": "ns",
            "range": "± 906793.035441452"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6404193.931818182,
            "unit": "ns",
            "range": "± 420872.89924710285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30531259.041666668,
            "unit": "ns",
            "range": "± 764789.8885789812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079178.113541666,
            "unit": "ns",
            "range": "± 76904.96477281819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907275.1837239584,
            "unit": "ns",
            "range": "± 13622.97643875525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232269.7688802083,
            "unit": "ns",
            "range": "± 10558.611524839993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2397625.80625,
            "unit": "ns",
            "range": "± 31478.671418896232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761055.0325520834,
            "unit": "ns",
            "range": "± 6726.961189630068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749400.8225911459,
            "unit": "ns",
            "range": "± 5295.6894620571475"
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
          "id": "8d0d10e26dfb58f88d15b33cf03b64cc2806949b",
          "message": "Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:33:53+09:00",
          "tree_id": "e680238104654ec491383068a58090a40d44d206",
          "url": "https://github.com/greymistcube/libplanet/commit/8d0d10e26dfb58f88d15b33cf03b64cc2806949b"
        },
        "date": 1678931540055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138681.10465116278,
            "unit": "ns",
            "range": "± 9642.166065262294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129371.87096774194,
            "unit": "ns",
            "range": "± 22398.438019213772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242217.8505154639,
            "unit": "ns",
            "range": "± 30971.075154906375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211548.17708333334,
            "unit": "ns",
            "range": "± 18889.57144368834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3730081.8076923075,
            "unit": "ns",
            "range": "± 101155.12054938958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9969019.214285715,
            "unit": "ns",
            "range": "± 169798.80178483573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19351.845360824744,
            "unit": "ns",
            "range": "± 4264.8015617674755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59799.08585858586,
            "unit": "ns",
            "range": "± 11776.108668297566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61753.35106382979,
            "unit": "ns",
            "range": "± 5886.474925409261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126018.4375,
            "unit": "ns",
            "range": "± 18404.035588231585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7814.757894736842,
            "unit": "ns",
            "range": "± 1257.4089088938942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21613.59595959596,
            "unit": "ns",
            "range": "± 3554.033152829624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5332710.405843099,
            "unit": "ns",
            "range": "± 411014.1834817548"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6446821.260869565,
            "unit": "ns",
            "range": "± 158885.05410007387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26732348.18539326,
            "unit": "ns",
            "range": "± 1781395.2782153566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6661419.225806451,
            "unit": "ns",
            "range": "± 199457.33002603333"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29228137.533333335,
            "unit": "ns",
            "range": "± 849256.4236013694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6808503.114955357,
            "unit": "ns",
            "range": "± 54853.98468069978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020845.2943638393,
            "unit": "ns",
            "range": "± 15812.61825265326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301364.3268694195,
            "unit": "ns",
            "range": "± 13654.892293060293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089899.2108774036,
            "unit": "ns",
            "range": "± 142465.3216747334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864641.1073567708,
            "unit": "ns",
            "range": "± 9184.142578262665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730334.0461425781,
            "unit": "ns",
            "range": "± 1875.5905590524221"
          }
        ]
      }
    ]
  }
}