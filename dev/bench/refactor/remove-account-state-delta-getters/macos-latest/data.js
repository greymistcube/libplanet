window.BENCHMARK_DATA = {
  "lastUpdate": 1688713391063,
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
      }
    ]
  }
}