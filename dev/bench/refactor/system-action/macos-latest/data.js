window.BENCHMARK_DATA = {
  "lastUpdate": 1682415024216,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414421611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8548980.666666666,
            "unit": "ns",
            "range": "± 81706.31041695851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21191433.14285714,
            "unit": "ns",
            "range": "± 368099.3252493883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52517686.421052635,
            "unit": "ns",
            "range": "± 1102241.808756556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106985420.46153846,
            "unit": "ns",
            "range": "± 987609.1429121151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224658696.13333333,
            "unit": "ns",
            "range": "± 1304874.2819931442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83488.79166666667,
            "unit": "ns",
            "range": "± 5992.714945606728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366365.2,
            "unit": "ns",
            "range": "± 7849.3807070501125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343163.1551724138,
            "unit": "ns",
            "range": "± 14353.836734539478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336538.63636363635,
            "unit": "ns",
            "range": "± 8025.229755176896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354131.333333333,
            "unit": "ns",
            "range": "± 100739.2650823567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959426.3333333335,
            "unit": "ns",
            "range": "± 81570.37973359173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27113.757894736842,
            "unit": "ns",
            "range": "± 2881.003898303172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128907.36842105263,
            "unit": "ns",
            "range": "± 10401.12037444395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127336.08108108108,
            "unit": "ns",
            "range": "± 6351.569224197604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135376.22916666666,
            "unit": "ns",
            "range": "± 13821.803448083616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10812.21875,
            "unit": "ns",
            "range": "± 1166.959384158813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28143.881443298967,
            "unit": "ns",
            "range": "± 2610.438602368459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748676.7626262626,
            "unit": "ns",
            "range": "± 194506.37897008104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109514.6511627906,
            "unit": "ns",
            "range": "± 114029.4798833646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733104.4183673467,
            "unit": "ns",
            "range": "± 263911.49053656304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7158187.864583333,
            "unit": "ns",
            "range": "± 411059.9344415059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3428570.285714286,
            "unit": "ns",
            "range": "± 43191.71618438403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610049.814814815,
            "unit": "ns",
            "range": "± 151707.12903322242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531258.512820513,
            "unit": "ns",
            "range": "± 127592.43199176117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5113480.184615385,
            "unit": "ns",
            "range": "± 228297.49215900377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7908484.9,
            "unit": "ns",
            "range": "± 224816.0129697401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6930938.061979166,
            "unit": "ns",
            "range": "± 43983.65054024116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2109770.4617745536,
            "unit": "ns",
            "range": "± 19075.18845166963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297586.7234375,
            "unit": "ns",
            "range": "± 7339.6493364195685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857838.5047286185,
            "unit": "ns",
            "range": "± 55038.76860135942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864806.4149088542,
            "unit": "ns",
            "range": "± 5601.84221922956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724688.4102260044,
            "unit": "ns",
            "range": "± 1880.9957251945173"
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
          "id": "7b2175f813edd520bd756afc91fc883560b5c634",
          "message": "Changelog",
          "timestamp": "2023-04-25T18:10:04+09:00",
          "tree_id": "edb79ad730cc058ce80548023203bf4275eda639",
          "url": "https://github.com/greymistcube/libplanet/commit/7b2175f813edd520bd756afc91fc883560b5c634"
        },
        "date": 1682414833314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8465438.133333333,
            "unit": "ns",
            "range": "± 121214.47322993045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21676526.991525423,
            "unit": "ns",
            "range": "± 946689.5230781363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54821334.258064516,
            "unit": "ns",
            "range": "± 1646222.0302811724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112719047.11627907,
            "unit": "ns",
            "range": "± 4165182.0778266797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237371823.97126436,
            "unit": "ns",
            "range": "± 12954888.388770554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69959.65957446808,
            "unit": "ns",
            "range": "± 13037.64754866822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385345.2419354839,
            "unit": "ns",
            "range": "± 33221.038028864896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329834.5140845071,
            "unit": "ns",
            "range": "± 15725.022779445646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296337.92424242425,
            "unit": "ns",
            "range": "± 41569.598964179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186468.6470588236,
            "unit": "ns",
            "range": "± 85916.29970277844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839012,
            "unit": "ns",
            "range": "± 137263.08450212164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21169.209677419356,
            "unit": "ns",
            "range": "± 3099.3811078589797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113201.14285714286,
            "unit": "ns",
            "range": "± 14447.807426848505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104013.46875,
            "unit": "ns",
            "range": "± 14677.397511285042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106231.33684210526,
            "unit": "ns",
            "range": "± 13796.203317233212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7857.688172043011,
            "unit": "ns",
            "range": "± 820.137156855017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19135.520833333332,
            "unit": "ns",
            "range": "± 2451.6873028876157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556451.5721649486,
            "unit": "ns",
            "range": "± 149378.61789867267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922564.9838709678,
            "unit": "ns",
            "range": "± 132937.90192537045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2553946.1414141413,
            "unit": "ns",
            "range": "± 199338.88016436703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6888050.8125,
            "unit": "ns",
            "range": "± 433675.4564342305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3672346.0714285714,
            "unit": "ns",
            "range": "± 148507.7102114545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3993810.3494623657,
            "unit": "ns",
            "range": "± 415099.31082492165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4924431,
            "unit": "ns",
            "range": "± 390463.77115139645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4732708.063829787,
            "unit": "ns",
            "range": "± 364792.04372076754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9146932.282608695,
            "unit": "ns",
            "range": "± 978538.221857737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6460108.995492788,
            "unit": "ns",
            "range": "± 70314.07796044984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969985.0123131794,
            "unit": "ns",
            "range": "± 49514.73573818326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284069.1481370192,
            "unit": "ns",
            "range": "± 15801.21523670305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594641.8489200366,
            "unit": "ns",
            "range": "± 81751.92268918379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781661.9748535156,
            "unit": "ns",
            "range": "± 4100.216443729516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754878.2149188702,
            "unit": "ns",
            "range": "± 5262.5634180886755"
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
          "id": "6d0843e3c65eb6a75416a2303ef05996a65118b6",
          "message": "Changelog",
          "timestamp": "2023-04-25T18:09:04+09:00",
          "tree_id": "06db307d611aed0108a8720ed4a8e483ff194ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/6d0843e3c65eb6a75416a2303ef05996a65118b6"
        },
        "date": 1682415003321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10105846.093023255,
            "unit": "ns",
            "range": "± 1801425.1937962808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20661944.655737706,
            "unit": "ns",
            "range": "± 922818.2910855723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56132383.15,
            "unit": "ns",
            "range": "± 2504252.8688908853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111398548.6875,
            "unit": "ns",
            "range": "± 5091240.807571719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235955156.3888889,
            "unit": "ns",
            "range": "± 14410242.806563454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66708.27173913043,
            "unit": "ns",
            "range": "± 10775.226326990716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338303.8846153846,
            "unit": "ns",
            "range": "± 31280.9336187643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324409.55319148937,
            "unit": "ns",
            "range": "± 32940.992144676435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310035.2272727273,
            "unit": "ns",
            "range": "± 26065.514593581556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4715555.234042553,
            "unit": "ns",
            "range": "± 362111.86163053353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941750.515151515,
            "unit": "ns",
            "range": "± 185372.89442430876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28470.352272727272,
            "unit": "ns",
            "range": "± 7077.400225714051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108133.48958333333,
            "unit": "ns",
            "range": "± 18048.273158974047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111468.00561797753,
            "unit": "ns",
            "range": "± 14717.088637273151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116153.89583333333,
            "unit": "ns",
            "range": "± 20115.02884987094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7243.375,
            "unit": "ns",
            "range": "± 1255.9438074087634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22547.177083333332,
            "unit": "ns",
            "range": "± 5962.776309378025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723288.1855670102,
            "unit": "ns",
            "range": "± 201954.9073772065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113088.2352941176,
            "unit": "ns",
            "range": "± 144450.98380400118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556153.65,
            "unit": "ns",
            "range": "± 191520.74594181328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7519005.108695652,
            "unit": "ns",
            "range": "± 652456.1878034411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453124.6931818184,
            "unit": "ns",
            "range": "± 250345.90929548908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3754849.8604651163,
            "unit": "ns",
            "range": "± 332115.8094541514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4885089.659793815,
            "unit": "ns",
            "range": "± 446807.3230766182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4847261.135416667,
            "unit": "ns",
            "range": "± 468377.25170932605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8924089.659574468,
            "unit": "ns",
            "range": "± 942297.883578832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6625354.358886719,
            "unit": "ns",
            "range": "± 119888.44856966937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2092117.3114149305,
            "unit": "ns",
            "range": "± 87250.09698579865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303763.0564778645,
            "unit": "ns",
            "range": "± 17352.03222597922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775070.3242590204,
            "unit": "ns",
            "range": "± 190854.42216014036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945336.2515024039,
            "unit": "ns",
            "range": "± 15106.491491622883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820301.1314610953,
            "unit": "ns",
            "range": "± 47768.14974087029"
          }
        ]
      }
    ]
  }
}