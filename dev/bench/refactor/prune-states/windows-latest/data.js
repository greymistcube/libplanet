window.BENCHMARK_DATA = {
  "lastUpdate": 1705568498339,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567370883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990765,
            "unit": "ns",
            "range": "± 22020.42771705639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1636298.3333333333,
            "unit": "ns",
            "range": "± 56067.03763388563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1329987.3684210526,
            "unit": "ns",
            "range": "± 122254.12688688042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5398970.202020202,
            "unit": "ns",
            "range": "± 331566.06260808447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32968.604651162794,
            "unit": "ns",
            "range": "± 1693.1183640849335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5045306.666666667,
            "unit": "ns",
            "range": "± 26556.69048514535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12881146.153846154,
            "unit": "ns",
            "range": "± 79798.32512219597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31657056.666666668,
            "unit": "ns",
            "range": "± 267178.9942199442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63133160,
            "unit": "ns",
            "range": "± 190206.96171726807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129504460,
            "unit": "ns",
            "range": "± 701606.7058646786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331911.9698660714,
            "unit": "ns",
            "range": "± 14638.623517447151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065032.9036458333,
            "unit": "ns",
            "range": "± 3615.0263355509123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730505.5106026785,
            "unit": "ns",
            "range": "± 1473.2497750452726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944056.5104166667,
            "unit": "ns",
            "range": "± 3170.375227402167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611430.029296875,
            "unit": "ns",
            "range": "± 1359.6460077997713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563604.5003255209,
            "unit": "ns",
            "range": "± 663.2525015613245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125230.434782609,
            "unit": "ns",
            "range": "± 81698.15683917156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2199122.950819672,
            "unit": "ns",
            "range": "± 81726.29604038638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731311.111111111,
            "unit": "ns",
            "range": "± 56367.396593179736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2616324,
            "unit": "ns",
            "range": "± 69581.85395632974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5933281.481481481,
            "unit": "ns",
            "range": "± 165851.3144054894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165607.24637681158,
            "unit": "ns",
            "range": "± 7047.763909892432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 153207.40740740742,
            "unit": "ns",
            "range": "± 4943.829844260491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143127.58620689655,
            "unit": "ns",
            "range": "± 4101.7327829418755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2655626.6666666665,
            "unit": "ns",
            "range": "± 37436.507519239756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421666.6666666665,
            "unit": "ns",
            "range": "± 26888.43392218816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9691.666666666666,
            "unit": "ns",
            "range": "± 1500.292369167575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47908.10810810811,
            "unit": "ns",
            "range": "± 2215.867853532092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43041.46341463415,
            "unit": "ns",
            "range": "± 972.6190440650691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43412.5,
            "unit": "ns",
            "range": "± 4035.8682781553575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2142.1052631578946,
            "unit": "ns",
            "range": "± 341.952761254316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8472.619047619048,
            "unit": "ns",
            "range": "± 449.457823443428"
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
          "id": "495d6a63ec278b00b1670cfe939f427911395c13",
          "message": "Cleanup",
          "timestamp": "2024-01-18T17:49:25+09:00",
          "tree_id": "009385a465be7a7476be875e4213d904893c2914",
          "url": "https://github.com/greymistcube/libplanet/commit/495d6a63ec278b00b1670cfe939f427911395c13"
        },
        "date": 1705568478577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931882.6530612245,
            "unit": "ns",
            "range": "± 99708.3127634091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1642389.7959183673,
            "unit": "ns",
            "range": "± 64547.92226483734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1281365.625,
            "unit": "ns",
            "range": "± 107103.52771046487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5029121.212121212,
            "unit": "ns",
            "range": "± 152804.322905096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33394.73684210526,
            "unit": "ns",
            "range": "± 1518.1475322986769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5050178.571428572,
            "unit": "ns",
            "range": "± 34417.41908196686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12803907.142857144,
            "unit": "ns",
            "range": "± 100498.17804920043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31572225,
            "unit": "ns",
            "range": "± 146854.33800507593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64319220,
            "unit": "ns",
            "range": "± 421424.141962194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129337884.61538461,
            "unit": "ns",
            "range": "± 958585.3577417731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342013.9583333335,
            "unit": "ns",
            "range": "± 8881.301641306745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076589.6205357143,
            "unit": "ns",
            "range": "± 1698.7961124368132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739725.830078125,
            "unit": "ns",
            "range": "± 2167.9060564711262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937701.3392857143,
            "unit": "ns",
            "range": "± 3923.479310145396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595121.5611049107,
            "unit": "ns",
            "range": "± 934.3445841325032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563425.0558035715,
            "unit": "ns",
            "range": "± 974.9857054753782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153552,
            "unit": "ns",
            "range": "± 38808.59140276373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275618.75,
            "unit": "ns",
            "range": "± 44385.51143109652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2750482.0512820515,
            "unit": "ns",
            "range": "± 95457.5818493409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2536739.7590361447,
            "unit": "ns",
            "range": "± 135154.69180540644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5860208,
            "unit": "ns",
            "range": "± 152562.58803083628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168638.23529411765,
            "unit": "ns",
            "range": "± 7997.3508563729865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156681.42857142858,
            "unit": "ns",
            "range": "± 7030.478014901435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140423.80952380953,
            "unit": "ns",
            "range": "± 3335.101911771927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2686286.6666666665,
            "unit": "ns",
            "range": "± 48956.611499610655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2415413.3333333335,
            "unit": "ns",
            "range": "± 34629.81511989481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10417.021276595744,
            "unit": "ns",
            "range": "± 1384.836335803547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51536.95652173913,
            "unit": "ns",
            "range": "± 4061.4163444989968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43488.88888888889,
            "unit": "ns",
            "range": "± 2050.0467569766056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48180.89887640449,
            "unit": "ns",
            "range": "± 7364.547699567385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2090.217391304348,
            "unit": "ns",
            "range": "± 273.3832726414565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8829.670329670329,
            "unit": "ns",
            "range": "± 1070.3576251260347"
          }
        ]
      }
    ]
  }
}