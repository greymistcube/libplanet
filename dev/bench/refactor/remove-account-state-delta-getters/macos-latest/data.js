window.BENCHMARK_DATA = {
  "lastUpdate": 1688713467793,
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
          "id": "c37b35e24d3b2dbe5d84caed9104cd77a4d5835a",
          "message": "Removed all getters",
          "timestamp": "2023-07-07T15:45:31+09:00",
          "tree_id": "a96da9c51e476c1f685c53e176dbe6ee9b5516f7",
          "url": "https://github.com/greymistcube/libplanet/commit/c37b35e24d3b2dbe5d84caed9104cd77a4d5835a"
        },
        "date": 1688713376505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8100020.75,
            "unit": "ns",
            "range": "± 183456.0861293012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21503289.602040816,
            "unit": "ns",
            "range": "± 847560.9729088631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50067070.8,
            "unit": "ns",
            "range": "± 760865.7681277295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101130257.61538461,
            "unit": "ns",
            "range": "± 1216929.4910507714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210110207,
            "unit": "ns",
            "range": "± 3433728.0201468403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67066.78125,
            "unit": "ns",
            "range": "± 9769.123420464924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329390.9310344828,
            "unit": "ns",
            "range": "± 19900.63346765105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301920.1979166667,
            "unit": "ns",
            "range": "± 21765.103421771662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291767.88144329895,
            "unit": "ns",
            "range": "± 17485.50487871031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053339.714285714,
            "unit": "ns",
            "range": "± 45023.90075270035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3627517.423076923,
            "unit": "ns",
            "range": "± 18669.983147919276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15829.677083333334,
            "unit": "ns",
            "range": "± 1290.347317542975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84868.30107526881,
            "unit": "ns",
            "range": "± 7046.881257112729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92175.2,
            "unit": "ns",
            "range": "± 10781.091569887432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111355.90425531915,
            "unit": "ns",
            "range": "± 17458.854517271473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7758.68085106383,
            "unit": "ns",
            "range": "± 2330.8100959752906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16384.78494623656,
            "unit": "ns",
            "range": "± 2129.884809344221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612239.5555555555,
            "unit": "ns",
            "range": "± 179452.4314561804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2980629.953125,
            "unit": "ns",
            "range": "± 136905.53038783916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200422.237113402,
            "unit": "ns",
            "range": "± 280032.4722847548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6096661.677419355,
            "unit": "ns",
            "range": "± 333303.7160793232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316620.2555555557,
            "unit": "ns",
            "range": "± 203463.67046434016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550410.970588235,
            "unit": "ns",
            "range": "± 165491.96693941593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4456265.657894737,
            "unit": "ns",
            "range": "± 224916.8749888754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3949432.471264368,
            "unit": "ns",
            "range": "± 214575.48446354188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7565012.783950618,
            "unit": "ns",
            "range": "± 392013.2436068402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6327476.262620192,
            "unit": "ns",
            "range": "± 85542.64575625623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2098483.3329358553,
            "unit": "ns",
            "range": "± 119299.33983721257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372442.1485821758,
            "unit": "ns",
            "range": "± 34731.12119159484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035222.0247691763,
            "unit": "ns",
            "range": "± 167052.40260565508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860242.1684945914,
            "unit": "ns",
            "range": "± 23131.215241373015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868859.7009765625,
            "unit": "ns",
            "range": "± 11207.946408592552"
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
          "id": "0aed9b230db9b2c83eecbce1661b3802ebae291f",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:47:32+09:00",
          "tree_id": "b15415eece6a9424f5306a422cfab23d029cd5fe",
          "url": "https://github.com/greymistcube/libplanet/commit/0aed9b230db9b2c83eecbce1661b3802ebae291f"
        },
        "date": 1688713454773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9280924.23,
            "unit": "ns",
            "range": "± 649390.7258562119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21889348.425531916,
            "unit": "ns",
            "range": "± 845307.6458233042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55365490.28947368,
            "unit": "ns",
            "range": "± 1901702.2365811865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110254385.6111111,
            "unit": "ns",
            "range": "± 3615931.8358470188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228102829.2118644,
            "unit": "ns",
            "range": "± 9969245.223949645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69474.89130434782,
            "unit": "ns",
            "range": "± 8107.991952668611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319551.9210526316,
            "unit": "ns",
            "range": "± 23204.40973570608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308657.28089887643,
            "unit": "ns",
            "range": "± 16586.373232257396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308321.26744186046,
            "unit": "ns",
            "range": "± 22538.938955492074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4688485.68,
            "unit": "ns",
            "range": "± 470968.90800823824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751006.8666666667,
            "unit": "ns",
            "range": "± 66050.88765150988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17782.817204301075,
            "unit": "ns",
            "range": "± 2419.8495908443338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98580.87234042553,
            "unit": "ns",
            "range": "± 14253.452626240214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112117.38043478261,
            "unit": "ns",
            "range": "± 12589.095072473985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115247.51612903226,
            "unit": "ns",
            "range": "± 18535.764814924514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6560.712765957447,
            "unit": "ns",
            "range": "± 1267.6334726215407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18987.1935483871,
            "unit": "ns",
            "range": "± 3002.023315011222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575757.2422680412,
            "unit": "ns",
            "range": "± 154379.03752009466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3027729.9213483147,
            "unit": "ns",
            "range": "± 162014.8133674977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145749.8333333335,
            "unit": "ns",
            "range": "± 211700.39608235165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6102513.84057971,
            "unit": "ns",
            "range": "± 293874.2533337837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3704529.6170212766,
            "unit": "ns",
            "range": "± 311404.38724697434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727004.3444444444,
            "unit": "ns",
            "range": "± 321386.29487605864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4171736.035714286,
            "unit": "ns",
            "range": "± 177338.52050091443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3800270.5430107526,
            "unit": "ns",
            "range": "± 214315.56298516982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6966372.838709678,
            "unit": "ns",
            "range": "± 201411.11117812357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7091216.641276042,
            "unit": "ns",
            "range": "± 87591.89882667235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2014723.420200893,
            "unit": "ns",
            "range": "± 34689.19219370196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289169.554966518,
            "unit": "ns",
            "range": "± 15324.382983708378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2855791.4099589647,
            "unit": "ns",
            "range": "± 206333.37644254015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950514.8627748842,
            "unit": "ns",
            "range": "± 26330.058300386616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749102.3814871652,
            "unit": "ns",
            "range": "± 11067.759103104"
          }
        ]
      }
    ]
  }
}